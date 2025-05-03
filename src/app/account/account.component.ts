import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../../Model/Account';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  @Input({required:true}) AccountObj!:Account ;
  @Output() accountChangeBgColor = new EventEmitter();
  color:string = 'primary';
  onChangeBgColor(){
    this.accountChangeBgColor.emit();
  }
}
