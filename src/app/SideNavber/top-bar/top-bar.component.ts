import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor(public layoutService: LayoutService) {}
}