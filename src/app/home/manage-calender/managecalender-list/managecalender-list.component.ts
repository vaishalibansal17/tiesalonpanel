import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { LIMIT } from 'src/app/shared/constants/constant';
import { ListDataSource } from 'src/app/shared/service/list/list.dataSource';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { DatePipe } from '@angular/common';
import { ListService } from 'src/app/shared/service/list/list.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
export interface PeriodicElement {
  name: string;
  position: number;
  service: string;
  serviceat: string;
  staff: string;
  number: number;
  status: string;
  time: string;
  bookingid: string;
  date: string;
}

@Component({
  selector: 'app-managecalender-list',
  templateUrl: './managecalender-list.component.html',
  styleUrls: ['./managecalender-list.component.scss']
})
export class ManagecalenderListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'service', 'serviceat', 'staff', 'number', 'status', 'bookingid', 'date', 'action' ];
  time: any;


  limitPage = LIMIT;
  dataSource: ListDataSource;
  search: string;
  sortData: any = {};
  url: any = 'assets/images/change.png';
  private paginator: MatPaginator;
  detail = [];
  loading: boolean;
  imgurl: string;
  totalLength: number;
  @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
  };

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('input', { static: true }) input: ElementRef;
  isApplied = false;
  salonId: any;

  constructor(public dialog: MatDialog,private httpService: HttpRequestService, private list: ListService,private trns: TranslatePipe, private routes: ActivatedRoute, private error: ErrorService) {}

  openDialog() {
    console.log('-----');
    
    const dialogRef = this.dialog.open(CalenderActionDialogBox, { width: '500px', disableClose: true });

  }

  ngOnInit() {
    this.time = this.routes.snapshot.params.time;
    this.getBookings();
  }

  getBookings(): void {
    this.dataSource = new ListDataSource(this.list);
    this.loadBookingList();
    this.dataSource.usersData.subscribe((val) => {
      // this.detail = val;
    });

    this.dataSource.loadingUsers.subscribe(e => this.loading = !e);
    this.dataSource.extra$.subscribe(e => this.imgurl = e)
    this.dataSource.totalCount$.subscribe(e => this.totalLength = e)

  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadBookingList())
      )
      .subscribe();

  }

  loadBookingList() {
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
      dt_time : this.time,
      dir: this.sortData.direction == 'asc' ? '1' : '-1'
    }
    if (this.search)
      listObj['srch'] = this.search;
    this.dataSource.load(listObj, { api: 'BOOKING' });
  }
  applyFilters(): void {
    this.loadBookingList();
    this.isApplied = true;
  }

  paginate() {
    this.paginator.pageSize = this.paginator.pageSize + 1;
    this.getBookings();
  }
  // ********************** Account Manager List Api Integration with search End******************

  exportCSV(data: any) {
    var finalData = [];
    var obj: any;
    var i = 0;
    this.httpService.getRequest('GET', 'BOOKING', `?all=true`).subscribe(rs => {
      let datePipe = new DatePipe('en-US');
      rs.res.bkngs.forEach(element => {
        obj = {
          "Serial": ++i,
          "Name": element.user_name,
          "Service": element.user_email,
          "Contact Number": element.user_contact,
          "Staff": element.staf_name ? element.staf_name : "NA",
          "Booking id": element.booking_id,
          "Status": element.status== 0?'Pending':(element.status== 1?'Confirmed':(element.status== 2?'Rejected':element.status== 3?'Completed':(element.status== 4?'Rescheduled':'Unserved'))),
          "date":datePipe.transform(element.bookDateTime, "dd/MM/yyyy"),
          "time":datePipe.transform(element.bookDateTime, "h:mm a"),
        };
        finalData.push(obj);
      });
      var options = { noDownload: false, headers: ["Serial", "Name", 'Service', 'serviceat', 'Staff', 'Contact Number', 'Status', 'time', 'Booking id', 'Date',] };
      new Angular5Csv(finalData, 'Booking list', options);
      this.httpService.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
    })
  }

}

@Component({
  selector: 'calender-list-accept',
  templateUrl: 'calender-list-accept.html',
})
export class CalenderActionDialogBox {
  constructor(){

  }
}