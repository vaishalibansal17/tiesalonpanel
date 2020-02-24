import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';

@Component({
  selector: 'app-cancelpolicy',
  templateUrl: './cancelpolicy.component.html',
  styleUrls: ['./cancelpolicy.component.scss']
})
export class CancelpolicyComponent implements OnInit {
  charge: any;
  policy: any;

  constructor(public dialog: MatDialog, private errsrv: ErrorService, private httpservice: HttpRequestService, private trns: TranslatePipe, ) { }

  ngOnInit() {
    this.charge = JSON.parse(localStorage.getItem('salon')).is_charge;
    this.policy = JSON.parse(localStorage.getItem('salon')).c_policy;
    console.log(this.charge);
    
  }

  openDialog(isCharge) {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: "Are you sure you want to do this?", btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          this.httpservice.getRequest('PUT', 'CANCELPOLICY', { is_charge: isCharge }, '').subscribe((response: any) => {
            if (response.status === 1) {
              let salon = JSON.parse(localStorage.getItem('salon'));
              salon.is_charge = isCharge;
              localStorage.setItem('salon', JSON.stringify(salon));
              this.charge = isCharge;
              this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('FEEDSUCCESS'));
            } else {
              console.log(response);
              this.errsrv.handleError(response.err.errCode)
            }
          });
        }
      }
    );
  }

}
