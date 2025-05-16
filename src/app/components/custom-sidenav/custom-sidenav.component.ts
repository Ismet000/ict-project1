import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router'; // Add this import
import { SidebarService } from '../services/sidebar.service';

export interface MenuItem {
  icon: string,
  label: string,
  route: string,
  badge?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent implements OnInit{
  
  sidenavService = inject(SidebarService);
  
  ngOnInit(): void {
    this.sidenavService.getMenuItem().subscribe({
      next: (res) => {
        this.menuData = res;
      },
      error: (err) => {
        console.log('Failed to load education data', err);
      }
    })
  }

  menuData!: MenuItem[];

  /* menuItems = signal<MenuItem[]>([
    {
      icon:'dashboard',
      label: "Dashboard",
      route: 'dashboard'
    },
    {
      icon:'priority_high',
      label: "On Priority",
      route: 'priority'
    },
    {
      icon:'task',
      label: "My Task",
      route: 'task'
    },
    
    {
      icon:'format_list_bulleted',
      label: "Task Categories",
      route: 'comments'
    },
    {
      icon:'settings',
      label: "Settings",
      route: 'comments'
    },
    {
      icon:'help',
      label: "Help",
      route: 'comments'
    }
  ]) */

}





