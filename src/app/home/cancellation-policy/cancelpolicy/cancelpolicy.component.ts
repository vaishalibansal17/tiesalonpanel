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
    this.charge = String(JSON.parse(localStorage.getItem('salon')).is_charge);
    this.policy = JSON.parse(localStorage.getItem('salon')).c_policy;
    console.log(this.charge);
    
  }

  openDialog(isCharge) {
    // if(this.charge && isCharge){
    //   console.log('-------');
    //   return;
    // }
    let msg = isCharge?"Are you sure, you want to charge?":"Are you sure, you don't want to charge?";
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: msg, btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          this.httpservice.getRequest('PUT', 'CANCELPOLICY', { is_charge: isCharge }, '').subscribe((response: any) => {
            if (response.status === 1) {
              let salon = JSON.parse(localStorage.getItem('salon'));
              salon.is_charge = String(isCharge);
              localStorage.setItem('salon', JSON.stringify(salon));
              this.charge = String(isCharge);
              this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('POLICYSUCCESS'));
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
