import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserregisterRoutingModule } from './userregister-routing.module';
import { UserregisterComponent } from './userregister/userregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserregisterComponent
  ],
  imports: [
    CommonModule,
    UserregisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UserregisterModule { }
