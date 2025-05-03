import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Account } from '../../Model/Account';
import { AccountComponent } from '../account/account.component';
import { AccountService } from '../../Services/Account/account.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  //providers:[AccountService]
})
export class HomeComponent {
  
}
