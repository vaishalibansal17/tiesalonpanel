import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { ListDataSource } from 'src/app/shared/service/list/list.dataSource';
import { ListService } from 'src/app/shared/service/list/list.service';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { ConfimDialogComponent } from 'src/app/shared/confim-dialog/confim-dialog.component';
import { LIMIT } from 'src/app/shared/constants/constant';
import { DatePipe } from '@angular/common';
export interface Booking {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'service', 'serviceat', 'staff', 'number', 'status', 'bookingid', 'date', 'action'];
  bookings: Booking[] = [
    { value: '6', viewValue: 'All Bookings' },
    { value: '2', viewValue: 'New Bookings' },
    { value: '1', viewValue: 'Accepted Bookings' },
    // { value: '4', viewValue: 'In-Process Bookings' },
    { value: '0', viewValue: 'Pending Bookings' },
    { value: '2', viewValue: 'Cancelled Bookings' },
    { value: '3', viewValue: 'Completed Bookings' },
  ];

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
  type: number;

  @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
  };

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('input', { static: true }) input: ElementRef;
  isApplied = false;
  salonId: any;
  constructor(public dialog: MatDialog, private list: ListService, private errsrv: ErrorService, private httpservice: HttpRequestService, private trns: TranslatePipe, ) { }

  openDialog(id, type) {
    const dialogRef = this.dialog.open(ConfimDialogComponent, { width: '500px', disableClose: true, data: { msg: `${'Are you sure you want to '}${type == 1 ? 'accept' : 'decline' + ' the Booking?'}`, btn: this.trns.transform('OK'), cncl: this.trns.transform('CANCEL') } });
    dialogRef.beforeClosed().subscribe(
      (val) => {
        if (val) {
          console.log(id);

          this.httpservice.getRequest('PUT', 'BOOKING_ACPT', { bk_status: type }, id)
            .subscribe((response: any) => {
              if (response.status === 1) {
                this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), type == 1 ? this.trns.transform('BK_ACPT') : this.trns.transform('BK_DEC'));
                this.getBookings();
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
  ngOnInit() {
    this.getBookings();
  }

  // ********************** Account Manager List Api Integration with search ******************
  getBookings(): void {
    this.dataSource = new ListDataSource(this.list);
    this.loadBookingList();
    this.dataSource.usersData.subscribe((val) => {
      this.detail = val;
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
      this.sortData.sortValue = 'user_name'
    } else if (this.sort.active == 'date') {
      this.sortData.sortValue = 'bookDateTime'
    } else {
      this.sortData.sortValue = '3'
    }
    this.sortData.direction = this.sort.direction || null;
    let listObj = {
      page: ((this.paginator.pageIndex - 1) + 2),
      limit: this.paginator.pageSize || this.limitPage[0],
      sort_val: this.sortData.sortValue,
      dir: this.sortData.direction == 'asc' ? '1' : '-1'
    }
    if (this.search)
      listObj['srch'] = this.search;
    if (this.type)
      listObj['type'] = this.type;
    this.dataSource.load(listObj, { api: 'BOOKING' });
  }
  
  applyFilters(): void {
    // if (this.search.length > 3)
    this.loadBookingList();
    this.isApplied = true;
  }
  slctype(event) {
    if (event.value < 6) {
      this.type = event.value;
      this.loadBookingList();
    } else {
      this.type = null;
      this.loadBookingList();
    }
  }

  paginate() {
    this.paginator.pageSize = this.paginator.pageSize + 1;
    this.getBookings();
  }

  bookingaction(action) {
    this.httpservice.getRequest('PUT', 'BOOKING_ACPT', action._id).subscribe(rs => {
      if (rs.status) {

      } else {

      }
    }, (error) => {
      // this.httprequest.showError('Failed to get');
    })
  }
  // ********************** Account Manager List Api Integration with search End******************

  exportCSV(data: any) {
    var finalData = [];
    var obj: any;
    var i = 0;
    this.httpservice.getRequest('GET', 'BOOKING', `?all=true`).subscribe(rs => {
      let datePipe = new DatePipe('en-US');
      rs.res.bkngs.forEach(element => {
        obj = {
          "Serial": ++i,
          "Name": element.user_name,
          "Service": element.user_email,
          "Contact Number": element.user_contact,
          "Staff": element.staf_name ? element.staf_name : "NA",
          "Booking id": element.booking_id,
          "Status": element.status == 0 ? 'Pending' : (element.status == 1 ? 'Confirmed' : (element.status == 2 ? 'Rejected' : element.status == 3 ? 'Completed' : (element.status == 4 ? 'Rescheduled' : 'Unserved'))),
          "date": datePipe.transform(element.bookDateTime, "dd/MM/yyyy"),
          "time": datePipe.transform(element.bookDateTime, "h:mm a"),
        };
        finalData.push(obj);
      });
      var options = { noDownload: false, headers: ["Serial", "Name", 'Service', 'serviceat', 'Staff', 'Contact Number', 'Status', 'time', 'Booking id', 'Date',] };
      new Angular5Csv(finalData, 'Booking list', options);
      this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
    })
  }

  chckDay(day) {
    switch (day) {
      case 0:
        return 'Sunday'
        break;
      case 1:
        return 'Monday'
        break;
      case 2:
        return 'Tuesday'
        break;
      case 3:
        return 'Wednesday'
        break;
      case 4:
        return 'Thursday'
        break;
      case 5:
        return 'Friday'
        break;
      case 6:
        return 'Saturday'
        break;
      default:
        break;
    }
  }
}