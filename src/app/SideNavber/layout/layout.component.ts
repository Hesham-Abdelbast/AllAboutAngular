import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { SideNavComponent } from "../side-nav/side-nav.component";
import { MainContentComponent } from "../main-content/main-content.component";

@Component({
  selector: 'app-layout',
  imports: [TopBarComponent, SideNavComponent, MainContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
