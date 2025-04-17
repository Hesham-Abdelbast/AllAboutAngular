import { Component } from '@angular/core';
import { Account } from '../../Model/Account';
import { Router } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AccountComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  public accounts: Account[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', createdAt: new Date() },
    { id: 2, name: 'Bob', email: 'bob@example.com', createdAt: new Date() },
  ];
  trackById(index: number, account: Account): Account {
    return account;
  }
  date = new Date();
  title = 'AllAboutAngular';
  changeBgColor(){
    console.log('change bg color');
  }

  goToPipes(){
    this.router.navigate(['/pipes']);
  }
}
