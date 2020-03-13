import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { Router } from '@angular/router';
import { IMG } from 'src/app/shared/constants/constant';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';
import { MatDialog } from '@angular/material';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  list: any;
  imgurl: any;
  url = IMG.PRO
  limit: number = 10;
  // NOTI_LIST
  constructor(private httprequest: HttpRequestService, private router: Router, private err: ErrorService, public dialog: MatDialog, private trns: TranslatePipe,) { }

  ngOnInit() {
    this.listNoti(0);
  }

  listNoti(limit) {
    this.limit = this.limit + limit;
    this.httprequest.getRequest('GET', 'NOTI_LIST', `${'limit=' + this.limit}`)
      .subscribe((res) => {
        if (res.status) {
          this.imgurl = res.res.uP;
          this.list = res.res.notf;
          console.log(this.list);
        } else {
          new Error();
        }

      },
        (error) => {
          // this.httprequest.showError('Failed to get');
        });
  }

  loadMore() {
    this.listNoti(5)
  }
  slct(val) {
    if (val.is_read) {
      this.router.navigateByUrl('booking/info/' + val.bk_id);
    } else {
      this.httprequest.getRequest('POST_WITHDATA', 'NOTI_READ', { ntf_id: val._id }, val._id).subscribe((response: any) => {
        if (response.status === 1) {
          this.list.map((v, i) => {
            if (v._id == val._id) {
              this.list[i]['is_read'] = 1;
              this.router.navigateByUrl('booking/info/' + v.bk_id);
            }
          })
        } else {
          console.log(response);
          this.err.handleError(response.err.errCode)
        }
      });
    }
  }


  openDialog(id, type) {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: `${'Are you sure you want to '}${type == 1 ? 'accept' : 'reject' + ' this Booking?'}`, btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          console.log(id);

          this.httprequest.getRequest('PUT', 'BOOKING_ACPT', { bk_status: type }, id)
            .subscribe((response: any) => {
              if (response.status === 1) {
                this.httprequest.sucsTostr(this.trns.transform('SUCCESS'), type == 1 ? this.trns.transform('BK_ACPT') : this.trns.transform('BK_DEC'));
                this.listNoti(0);
              } else {
                if (response.err)
                  this.err.handleError(response.err.errCode)
                return false;
              }
            }, error => {
              this.err.handleError()
            });
        }
      }
    );
  }

}
