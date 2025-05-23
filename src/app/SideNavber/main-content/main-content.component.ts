import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
constructor(public layoutService: LayoutService) {}
}
