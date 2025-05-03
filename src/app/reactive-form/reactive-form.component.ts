import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ValidationService } from '../../Services/Custom Validation/validation.service';

@Component({
  selector: 'app-reactive-form',
  imports: [SharedModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  //
  firstname = new FormControl<string>('defualt Value',{updateOn:'blur',nonNullable:true});
  formBuilder = inject(FormBuilder);
  
  registerForm = this.formBuilder.group({
    firstname : ['',Validators.required],
    lastname : ['',[Validators.required,Validators.minLength(5)]],
    email : '',
    password : '',
    confirmPassword : '',
  }, {
    validators: ValidationService.Match('password', 'confirmPassword')
  });

  // registerForm: FormGroup = new FormGroup({
  //   firstname: this.firstname,
  //   lastname: new FormControl('',{validators:[Validators.required]}),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  // });;

}
