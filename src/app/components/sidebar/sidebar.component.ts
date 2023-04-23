import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Basic Details',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Bank Details & IDs',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Certificates',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'Perfomance',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/licensce', title: 'License',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/tables', title: 'Failures',  icon:'ni-bullet-list-67 text-red', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
