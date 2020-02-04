import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/';
import { ListService } from './list.service';
import { List } from 'src/app/model/List';
export class ListDataSource implements DataSource<List> {
    private usersData = new BehaviorSubject<List[]>([]);

    private loadingUsers = new BehaviorSubject<boolean>(false);

    public countInfo = new BehaviorSubject<number>(0);

    public extra = new BehaviorSubject<string>('');


    public loading$ = this.loadingUsers.asObservable();

    public totalCount$ = this.countInfo.asObservable();

    public extra$ = this.extra.asObservable();

    constructor(private listService: ListService) { }

    load(listObj, dataObj) {
        this.loadingUsers.next(true);
        this.listService.staffListing(listObj, dataObj).pipe(
            catchError((err) => of([err])),
            finalize(() => this.loadingUsers.next(false))
        ).subscribe((data: any) => {
            if (data['res'] && data['res']['list']) {
                this.usersData.next(data['res']['list']);
                if (!listObj.search) {
                    this.countInfo.next(data['res']['total']);
                } else {
                    if (data['res']['total'] === 0) {
                        this.countInfo.next(1);
                    } else {
                        this.countInfo.next(data['res']['total']);
                    }
                }
                this.extra.next(data['res']['bp']);
            }
        });
    }

    connect(collectionViewer: CollectionViewer): Observable<List[]> {
        return this.usersData.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersData.complete();
        this.loadingUsers.complete();
        this.countInfo.complete();
        this.extra.complete();
    }

}