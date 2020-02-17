import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListDataSource } from 'src/app/shared/service/list/list.dataSource';
import { MatPaginator, MatSort } from '@angular/material';
import { ListService } from 'src/app/shared/service/list/list.service';
import { HttpRequestService } from 'src/app/shared/service/http-request.service';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { DatePipe } from '@angular/common';
export interface PeriodicElement {
  name: string;
  position: number;
  service: string;
  staff: string;
  number: number;
  status: string;
  time: string;
  bookingid: string;
  date: string;
}

export interface Walkinglist {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email','service', 'staff', 'number', 'bookingid', 'date', 'Action'];
  limitPage = [10, 20, 30];
  dataSource: ListDataSource;
  search: string;
  sortData: any = {};
  url: any = 'assets/images/change.png';
  private paginator: MatPaginator;

  walkinglists: Walkinglist[] = [
    { value: '1', viewValue: 'All Bookings' },
    { value: '2', viewValue: 'New Bookings' },
    { value: '3', viewValue: 'Accepted Bookings' },
    { value: '4', viewValue: 'In-Process Bookings' },
    { value: '5', viewValue: 'Completed Bookings' },
  ];

  @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
  };

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('input', { static: true }) input: ElementRef;
  isApplied = false;
  salonId: any;
  constructor( private list: ListService, private httpservice: HttpRequestService, private trns: TranslatePipe, ) { }


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
    this.dataSource.load(listObj, { api: 'WALKING' });
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
    this.httpservice.getRequest('GET', 'WALKING', `?all=true`).subscribe(rs => {
      let datePipe = new DatePipe('en-US');
      rs.res.wlkUsr.forEach(element => {
        obj = {
          "Serial": ++i,
          "Name": element.fullname,
          "Email": element.email,
          "Services": element.service?element.service:"NA",
          "Staff": element.discount,
          "Contact Number": element.pno,
          "Booking-Id": element.bookingid?element.bookingid:"NA",
          "Date": datePipe.transform(element.bookDateTime, "dd/MM/yyyy"),
        };
        finalData.push(obj);
      });
      var options = { noDownload: false, headers: ["Serial", "Name", "Email", 'Services', 'Staff', 'Contact Number', 'Booking-Id', 'Date'] };
      new Angular5Csv(finalData, 'walkin_list', options);
      this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
    })
  }
}

