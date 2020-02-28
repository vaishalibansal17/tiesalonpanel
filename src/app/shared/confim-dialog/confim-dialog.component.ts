import { Component, OnInit, Inject } from '@angular/core';
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
  btn: any;
  cncl: any;
  constructor(
    public dialogRef: MatDialogRef<ConfimDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {    
    this.msg = data.msg;
    this.btn = data.btn;
    this.cncl = data.cncl
  }


  ngOnInit(): void {}

  close(val) {
    this.dialogRef.close(val);
  }
}
