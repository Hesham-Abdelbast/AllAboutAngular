import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  imports:[CommonModule,RouterLink]
})
export class SideNavComponent {
  constructor(public layoutService: LayoutService) {}
}