import { Component, OnInit, Inject } from '@angular/core';
import { HttpRequestService } from '../service/http-request.service';
import { ErrorService } from '../service/error.service';
import { TranslatePipe } from '../_pipes/translate.pipe';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confim-dialog',
  templateUrl: './confim-dialog.component.html',
  styleUrls: ['./confim-dialog.component.scss']
})
export class ConfimDialogComponent implements OnInit {
  

  id: any;
  func: any;
  msg: any;
  constructor(
    private httpservice: HttpRequestService,
    private errsrv: ErrorService,
    private trns: TranslatePipe,
    public dialogRef: MatDialogRef<ConfimDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    console.log(data);
    
    this.msg = data.msg;
  }


  ngOnInit(): void {
    
  }

  close(val) {
    this.dialogRef.close(val);
  }
}
