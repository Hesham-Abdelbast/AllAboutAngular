import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgForm } from '@angular/forms';
import { Account } from '../../Model/Account';

@Component({
  selector: 'app-forms',
  imports: [SharedModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  accountDto:Account = {id:1,email:'',createdAt:'',name:''};
  AddAcount(AddAcountForm:NgForm){
    console.log(AddAcountForm.valid , AddAcountForm.value)
  }
}
