import { Injectable } from '@angular/core';

export interface BadgeItem {
	type: string;
	value: string;
}

export interface ChildrenItems {
	state: string;
	target?: boolean;
	name: string;
	type?: string;
	children?: ChildrenItems[];
}

export interface MainMenuItems {
	state: string;
	short_label?: string;
	main_state?: string;
	target?: boolean;
	name: string;
	type: string;
	icon: string;
	badge?: BadgeItem[];
	children?: ChildrenItems[];
}

export interface Menu {
	label: string;
	main: MainMenuItems[];
}

const MENUITEMS = [{
	label: 'Navigation',
	main: [{
		state: 'dashboard',
		short_label: 'D',
		name: 'Dashboard',
		type: 'link',
		icon: 'feather icon-home'
	}, {
		state: 'request-demo',
		short_label: 'D',
		name: 'Manage Request Demo',
		type: 'link',
		icon: 'feather icon-users',
		children: [{
			state: 'list',
			name: 'User List'
		}]
	}, {
		state: 'organisers',
		short_label: 'D',
		name: 'Manage organisers',
		type: 'link',
		icon: 'feather icon-briefcase',
		children: []
	}, {
		state: 'attendees',
		short_label: 'D',
		name: 'Manage attendees',
		type: 'link',
		icon: 'feather icon-briefcase',
		children: []
	}, {
		state: 'category',
		short_label: 'D',
		name: 'Manage Categories',
		type: 'link',
		icon: 'feather icon-list',
		children: [{
			state: 'list',
			name: 'Category List'
		}]
	},{
		state: 'help-center',
		short_label: 'D',
		name: 'Help center',
		type: 'link',
		icon: 'feather icon-briefcase',
		children: []
	},]
}];

@Injectable()

export class MenuItems {
	getAll(): Menu[] {
		return MENUITEMS;
	}
}