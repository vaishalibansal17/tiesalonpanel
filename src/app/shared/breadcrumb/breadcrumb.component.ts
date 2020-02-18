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
									
									if(routes.snapshot.data.title.includes('/')){
										let path = routes.snapshot.data.title.split('/')
										let routepath = url.split(_.toLower(_.trim(path[1])));
										routepath.splice( 1, 0, _.trim(_.toLower(path[0])));
										for (let index = 0; index < path.length; index++) {
											this.breadcrumbs.push({
												label: _.startCase(_.toLower(path[index])),
												icon: icon,
												caption: caption,
												status: path.length - index == 1?status: true,
												url: routepath.join('')
											});
										}
									} else{
										this.breadcrumbs.push({
											label: routes.snapshot.data.title,
											icon: icon,
											caption: caption,
											status: status,
											url: url
										});
									}
								}
							}
							currentRoute = routes;
						}
					});
				} while (currentRoute);
			});
	}

	ngOnInit() { }

	ngOnDestroy(): void {
		if (!!this.subscription)
			this.subscription.unsubscribe();
	}
}