import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpRequestService } from '../shared/service/http-request.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../shared/service/error.service';
import * as jspdf from 'jspdf';
import html2canvas from "html2canvas";
import { DatePipe } from '@angular/common';
(window as any).html2canvas = html2canvas;
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})

export class InvoiceComponent implements OnInit {
  id: any;
  detail: any;
  ttlamt: any;
  error: any;
  @ViewChild('content', { static: true }) content: ElementRef;

  constructor(private httpService: HttpRequestService,
    private titleService: Title,
    private routes: ActivatedRoute, private errsrv: ErrorService, ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getUserProfile();
  }

  getUserProfile() {
    this.httpService.getRequest('GET_PARMS', 'BOOKING_VIEW', this.id, '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.detail['slnme'] = JSON.parse(localStorage.getItem('salon')).name
          // this.ttlamt = this.detail.service.reduce((acc, val) => acc.cost + val.cost);
          // this.ttlamt = this.detail.service.length == 1 ? this.ttlamt.cost : this.ttlamt;
          this.detail.service.map((v,i)=>{
            this.detail.service[i]['discprice']=v.cost-(v.cost*v.discount)/100;
          })
          this.ttlamt = this.detail.totalAmount;
        } else {
          if (response.err) {
            this.errsrv.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        this.errsrv.handleError(0);
        // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
      });
  }


  loadImage(url) {
    return new Promise((resolve) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.src = url;
    })
  }

  htmlToPDF() {

    // let doc = new jspdf();
    // console.log('------------');

    // doc.addHTML(this.content.nativeElement, function() {
    //   console.log('------------ppppppp');
    //    doc.save("obrz.pdf");
    // });
    var element = this.content.nativeElement;
    var HTML_Width = element.scrollWidth;
    var HTML_Height = element.scrollHeight + 100;
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;
    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
    // this.httpService.infoTostr("Please be patient we're processing the pdf", "PDF Processing!");
    return html2canvas(element, { scale: 2 }).then(canvas => {
      canvas.getContext('2d');
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jspdf('p', 'pt', [PDF_Width, PDF_Height]);
      //  pdf.addImage(logo, 'JPEG',  400, 3, 400, 60);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin + 40, canvas_image_width, canvas_image_height);

      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
      }
      let datePipe = new DatePipe("en-US");
      pdf.save(name + ' ' + datePipe.transform(new Date(), 'MMM-dd-yyyy') + '.pdf'); // Generated PDF
      this.httpService.sucsTostr("Successfull", "Download Complete.");
      return true;
    })

  }

  onPrintInvoice() {
  // let  date = new Date()
    // let newTitle = 'Invoice' + date.getDate()+'_'+date.getMonth()+'_'+date.getFullYear();
    // this.titleService.setTitle( newTitle );
    window.print();
    // this.titleService.setTitle( "TieWeb" );
  }



}
