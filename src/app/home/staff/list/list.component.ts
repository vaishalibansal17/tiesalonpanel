import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListDataSource } from 'src/app/shared/service/list/list.dataSource';
import { ListService } from 'src/app/shared/service/list/list.service';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';

@Component({
  selector: 'app-staff',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  limitPage = [10, 20, 30];
  dataSource: ListDataSource;
  search: string; 
  sortData: any = {};
  displayedColumns = ['Sno', 'name', 'photo','email', 'phone','review', 'Action'];
  url: any = 'assets/images/change.png';
  private paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
  };

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('input', { static: true }) input: ElementRef;
  isApplied = false;
  salonId: any;
  constructor(public dialog: MatDialog, private list: ListService, private errsrv: ErrorService,private httpservice: HttpRequestService,private trns: TranslatePipe, ) { }

  openDialog(id) {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: "Are you sure you want to delete this Staff?"} });
    
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if(val){
          this.httpservice.getRequest('DELETE', 'STAFF', id)
          .subscribe((response: any) => {
            if (response.status === 1) {
              this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('DELETE_STAFF'));
              this.getSalonStaff();
            } else {
              if (response.err)
                this.errsrv.handleError(response.err.errCode)
              return false;
            }
          }, error => {
            this.errsrv.handleError(0)
          });
        }
      }
    );
  }
  ngOnInit() {
    this.getSalonStaff();
  }

  // ********************** Account Manager List Api Integration with search ******************
  getSalonStaff(): void {
    this.dataSource = new ListDataSource(this.list);
    this.loadStaffList();
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadStaffList())
      )
      .subscribe();

  }

  loadStaffList() {
    if (this.sort.active == 'name') {
      this.sortData.sortValue = '1'
    } else if (this.sort.active == 'email') {
      this.sortData.sortValue = '2'
    } else {
      this.sortData.sortValue = '3'
    }
    this.sortData.direction = this.sort.direction || null;
    let listObj = {
      page: ((this.paginator.pageIndex - 1) + 1),
      limit: this.paginator.pageSize || this.limitPage[0],
      sort_val: this.sortData.sortValue,
      dir: this.sortData.direction == 'asc' ? '1' : '-1'
    }
    if (this.search)
      listObj['srch'] = this.search;
    this.dataSource.load(listObj, {api: 'STAFF'});
  }
  applyFilters(): void {
    this.loadStaffList();
    this.isApplied = true;
  }
  // ********************** Account Manager List Api Integration with search End******************

  exportCSV(data: any) {
    var finalData = [];
    var obj: any;
    var i = 0;
    let listObj = {
     all:true
    }
    this.dataSource.load(listObj, {api: 'STAFF'});

    data.usersData.subscribe(rs=>{
      rs.forEach(element => {
        obj = {
          "Serial": ++i,
          "Name": element.name,
          "Email": element.email
        };
        finalData.push(obj);
      });
      var options = { noDownload: false, headers: ["Serial", "Name", "Email"] };
      new Angular5Csv(finalData, 'staff_list', options);
      this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
    })
  }
}