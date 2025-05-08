import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public isSideNavCollapsed = new BehaviorSubject<boolean>(false);
  isSideNavCollapsed$ = this.isSideNavCollapsed.asObservable();

  toggleSideNav() {
    this.isSideNavCollapsed.next(!this.isSideNavCollapsed.value);
  }
}