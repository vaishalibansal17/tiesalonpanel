import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';
import { MatDialog } from '@angular/material';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  detail: any;
  id: any;
  ttlamt: any;

  constructor(public dialog: MatDialog,private httpService: HttpRequestService,private route: Router, private routes: ActivatedRoute, private error: ErrorService,private trns: TranslatePipe, ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;
    this.getUserProfile();
  }
  getUserProfile() {
    this.httpService.getRequest('GET_PARMS', 'WLK_DETAIL', this.id)
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.detail = response.res;
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


  compltServc() {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: `${'Are you sure you want to complete this Booking?'}`, btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          this.httpService.getRequest('PUT', 'WLKBOOKING_ACPT', { bk_status: 3 }, this.id)
            .subscribe((response: any) => {
              if (response.status === 1) {
                this.route.navigateByUrl('walk-in-customer').then(() => {
                  this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('BK_COM'));
                })
              } else {
                if (response.err)
                  this.error.handleError(response.err.errCode)
                return false;
              }
            }, error => {
              this.error.handleError()
            });
        }
      }
    );
  }
}
