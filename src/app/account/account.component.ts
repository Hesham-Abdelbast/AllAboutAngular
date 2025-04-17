import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Account } from '../../Model/Account';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [NgClass],
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
