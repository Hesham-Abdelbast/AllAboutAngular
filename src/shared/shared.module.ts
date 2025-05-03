import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppTranslateModule } from '../app/app-translate/app-translate.module';
import { TranslatePipe } from '@ngx-translate/core';

const declarations: [] = []

const modules = [
  CommonModule,
  FormsModule,
  TranslatePipe,
  AppTranslateModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: declarations,
  imports: modules,
  exports: [
    ...declarations, ...modules
  ]
})
export class SharedModule { }
