import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserloginRoutingModule } from './userlogin-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    UserloginComponent
  ],
  imports: [
    CommonModule,
    UserloginRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]

})
export class UserloginModule { }
