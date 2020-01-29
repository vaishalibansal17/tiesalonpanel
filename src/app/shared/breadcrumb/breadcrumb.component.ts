import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import _ from 'lodash';
import { MessageService } from "../service/message.service";
import { Subscription } from "rxjs";


@Component({
	selector: "app-breadcrumb",
	templateUrl: "./breadcrumb.component.html",
	styleUrls: ["./breadcrumb.component.scss"]
})

export class BreadcrumbComponent implements OnInit {
	@Input() event: string;
	subscription: Subscription;

	tempState = [];
	breadcrumbs: Array<Object>;
	eventName: any;
	userName: string;
	isEdit = false;
	isShowEventName = false;

	/**
   * @class BreadcrumbComponent
   * @constructor
   */
	constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService) {
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(() => {				
				this.breadcrumbs = [];
				this.tempState = [];
				let currentRoute = this.route.root, url = "";
				do {
					const childrenRoutes = currentRoute.children;
					currentRoute = null;
					childrenRoutes.forEach(routes => {
						if (routes.outlet === "primary") {
							const routeSnapshot = routes.snapshot;
							url += "/" + routeSnapshot.url.map(segment => segment.path).join("/");
							if (routes.snapshot.data.title !== undefined) {
								let status = true;
								if (routes.snapshot.data.status !== undefined) {
									status = routes.snapshot.data.status;
								}

								let icon = false;
								if (routes.snapshot.data.icon !== undefined) {
									icon = routes.snapshot.data.icon;
								}

								let caption = false;
								if (routes.snapshot.data.caption !== undefined) {
									caption = routes.snapshot.data.caption;
								}

								if (!this.tempState.includes(routes.snapshot.data.title)) {
									this.tempState.push(routes.snapshot.data.title);
									this.breadcrumbs.push({
										label: _.startCase(_.toLower(routes.snapshot.data.title)).replace('-', ' '),
										icon: icon,
										caption: caption,
										status: status,
										url: url
									});
								}
							}
							currentRoute = routes;
						}
					});
				} while (currentRoute);
			});
			
		// var activeRoute = ['event-privacy','about-event','rsvp','view','speakers', 'attendees', 'exhibitors', 'agenda', 'sponsors', 'media-partners', 'floor-plan'];
		// let routeArr = this.router.url.split('/');
		
		// this.isShowEventName = _.includes(activeRoute, (routeArr[this.router.url.split('/').length-2]));
		
		// this.isEdit = localStorage.getItem('isEdit') == '1' || localStorage.getItem('isView') == '1' ? true : false;
		// this.eventName = localStorage.getItem('eventDetail') && localStorage.getItem('eventDetail') != '' ? JSON.parse(localStorage.getItem('eventDetail')).event.eventName : '';
		// this.subscription = this.messageService.getEventName().subscribe((name) => {
		// 	this.eventName = this.eventName == "" || this.eventName == null ? name.text : this.eventName;
		// });
		// this.eventName = this.eventName == "" ? this.eventName : this.eventName;
	}

	ngOnInit() { }

	ngOnDestroy(): void {
		if (!!this.subscription)
			this.subscription.unsubscribe();
	}
}