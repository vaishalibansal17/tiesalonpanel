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
import { LIMIT } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'invoice', 'service', 'serviceat', 'date', 'amount'];
  limitPage = LIMIT;
  dataSource: ListDataSource;
  search: string;
  sortData: any = {};
  url: any = 'assets/images/change.png';
  private paginator: MatPaginator;
  // detail: import("/Users/brainmobimac/Abhishek/angular/tie-web/src/app/model/List").List[];
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
  constructor( private list: ListService, private httpservice: HttpRequestService, private trns: TranslatePipe, ) { }


  ngOnInit() {
    this.getReport();
  }

  // ********************** Account Manager List Api Integration with search ******************
  getReport(): void {
    this.dataSource = new ListDataSource(this.list);
    this.loadlist();
    // this.dataSource.usersData.subscribe((val) => this.detail = val);

    this.dataSource.loadingUsers.subscribe(e => this.loading = !e);
    this.dataSource.extra$.subscribe(e => this.imgurl = e)
    this.dataSource.totalCount$.subscribe(e => this.totalLength = e)
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadlist())
      )
      .subscribe();

  }

  loadlist() {
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
    this.dataSource.load(listObj, { api: 'REPORT' });
  }
  applyFilters(): void {
    this.loadlist();
    this.isApplied = true;
  }

  paginate(){
    this.paginator.pageSize = this.paginator.pageSize + 1;
    this.getReport();
  }
  // ********************** Account Manager List Api Integration with search End******************

  exportCSV(data: any) {
    var finalData = [];
    var obj: any;
    var i = 0;
    this.httpservice.getRequest('GET', 'REPORT', `all=true`).subscribe(rs => {
      let datePipe = new DatePipe('en-US');
      rs.res.wlkUsr.forEach(element => {
        obj = {
          "Serial": ++i,
          "Name": element.name? element.name:'NA',
          "Services": element.service?(element.service.map(y => y.title).join(', ')):"NA",
          "Service at": element.service_at == 1?'Home':(element.service_at==2? 'Salon':'Clinic'),
          "Booking-Id": element.bookingid?element.bookingid:"NA",
          "Date": datePipe.transform(element.bookDateTime, "dd/MM/yyyy"),
          "Total Amount": element.totalAmount?element.totalAmount:'NA',
        };
        finalData.push(obj);
      });
      var options = { noDownload: false, headers: ["Serial", "Name", 'Services', 'Service at', 'Booking-Id', 'Date'] };
      new Angular5Csv(finalData, 'gross_sales_report', options);
      this.httpservice.sucsTostr(this.trns.transform('SUCCESS'), this.trns.transform('EXPORTD'));
    })
  }

}

