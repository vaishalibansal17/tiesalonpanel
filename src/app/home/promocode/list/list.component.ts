import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListDataSource } from 'src/app/shared/service/list/list.dataSource';
import { ListService } from 'src/app/shared/service/list/list.service';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { ErrorService } from 'src/app/shared/service/error.service';
export interface PeriodicElement {
  position: number;
  coupon: string;
  discount: string;
  service: string;
  added: string;
  uses: string;
  from: string;
  to: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position','name', 'coupon', 'discount', 'service', 'added', 'uses', 'from', 'to', 'action' ];
  limitPage = [10, 20, 30];
  dataSource: ListDataSource;
  search: string; 
  sortData: any = {};
  url: any = 'assets/images/change.png';
  private paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
  };

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('input', { static: true }) input: ElementRef;
  isApplied = false;
  salonId: any;
  constructor(public dialog: MatDialog, private list: ListService,private httpservice: HttpRequestService,private trns: TranslatePipe, ) { }

  openDialog(id) {
    const dialogRef = this.dialog.open(PromoDeleteDialogBox, { width: '500px', disableClose: true, data: { id: id } });

    dialogRef.afterClosed().subscribe(
      () => this.getSalonStaff()
    );
  }
  ngOnInit() {
    this.getSalonStaff();
  }

  // ********************** Account Manager List Api Integration with search ******************
  getSalonStaff(): void {
    this.dataSource = new ListDataSource(this.list);
    this.loadStaffList();
    console.log(this.dataSource)
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
    this.dataSource.load(listObj, {api: 'PROMO'});
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
    this.dataSource.load(listObj, {api: 'PROMO'});

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

@Component({
  selector: 'promo-delete.component',
  templateUrl: 'promo-delete.component.html',
})
export class PromoDeleteDialogBox {
  id: any;
  constructor(
    private httpservice: HttpRequestService,
    private errsrv: ErrorService,
    private trns: TranslatePipe,
    public dialogRef: MatDialogRef<PromoDeleteDialogBox>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.id
  }

  delete() {
    this.httpservice.getRequest('DELETE', 'PROMO', `${this.id}`)
      .subscribe((response: any) => {
        if (response.status === 1) {
          this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('DELETE_STAFF'));
          this.dialogRef.close();
        } else {
          if (response.err)
            this.errsrv.handleError(response.err.errCode)
          return false;
        }
      }, error => {
        this.errsrv.handleError(0)
      });
  }

  close() {
    this.dialogRef.close();
  }
}