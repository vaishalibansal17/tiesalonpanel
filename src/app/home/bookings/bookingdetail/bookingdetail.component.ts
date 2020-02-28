import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IMG } from 'src/app/shared/constants/constant';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.scss']
})

export class BookingdetailComponent implements OnInit {
  detail: any;
  url: any = IMG.PRO;
  usrurl: any = IMG.PRO
  id: any;
  ttlamt: any;

  constructor(public dialog: MatDialog,private httpService: HttpRequestService, private routes: ActivatedRoute,private errsrv: ErrorService,private route: Router,private trns: TranslatePipe, private error: ErrorService) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getUserProfile();
  }
  openDialog(id, type) {
    const dialogRef = this.dialog.open(BookingEmailDialogPopup, { width: '500px', disableClose: true });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val.close) {
          this.httpService.getRequest('PUT', 'BOOKING_ACPT', id, {bk_status:3})
            .subscribe((response: any) => {
              if (response.status === 1) {
                this.route.navigateByUrl('booking').then(()=>{
                  this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('BK_COM'));
                })
              } else {
                if (response.err)
                  this.errsrv.handleError(response.err.errCode)
                return false;
              }
            }, error => {
              this.errsrv.handleError()
            });
        }
      }
    );
  }
  compltServc(){
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: `${'Are you sure you want to complete this Booking?'}`, btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          this.httpService.getRequest('PUT', 'BOOKING_ACPT', {bk_status:3}, this.id)
            .subscribe((response: any) => {
              if (response.status === 1) {
                this.route.navigateByUrl('booking').then(()=>{
                  this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('BK_COM'));
                })
              } else {
                if (response.err)
                  this.errsrv.handleError(response.err.errCode)
                return false;
              }
            }, error => {
              this.errsrv.handleError()
            });
        }
      }
    );
  }
  getUserProfile() {
    this.httpService.getRequest('GET_PARMS', 'BOOKING_VIEW', this.id, '')
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
          this.url = this.detail.logo ? this.detail.usr_bp + this.detail.img : this.url;
          this.ttlamt = this.detail.service.reduce((acc, val) => acc.cost + val.cost );
          this.ttlamt = this.detail.service.length==1?this.ttlamt.cost:this.ttlamt;
        } else {
          if (response.err) {
            this.error.handleError(response.err.errCode);
          }
        }
      }, (error) => {
        this.error.handleError(0);
        // this.httpService.showError(MESSAGE.CONNECTION_MSG, MESSAGE.CONNECTION_ERROR, MESSAGE.MSGTIME);
      });
  }
}


@Component({
  selector: 'booking-email',
  templateUrl: 'booking-email.html',
  styleUrls: ['./bookingdetail.component.scss']
})
export class BookingEmailDialogPopup {
  id: any;
  func: any;
  msg: any;
  btn: any;
  cncl: any;
  email : string
  place: any;
  constructor(public dialogRef: MatDialogRef<BookingEmailDialogPopup>,) {  }


  ngOnInit(): void {
    
  }

  submit(){
    console.log(this.email);
    
  }

  close(val) {
    console.log(val);
    
    // this.dialogRef.close(val);
  }
}