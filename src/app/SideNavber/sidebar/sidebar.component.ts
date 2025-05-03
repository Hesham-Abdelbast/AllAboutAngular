import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface RouteConfig {
  path: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule], // Add these imports
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Input() routes: RouteConfig[] = [];
}