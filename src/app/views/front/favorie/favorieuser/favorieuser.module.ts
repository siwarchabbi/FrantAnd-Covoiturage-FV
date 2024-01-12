import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavorieuserRoutingModule } from './favorieuser-routing.module';
import { FavorieuserComponent } from './favorieuser/favorieuser.component';


@NgModule({
  declarations: [
    FavorieuserComponent
  ],
  imports: [
    CommonModule,
    FavorieuserRoutingModule
  ]
})
export class FavorieuserModule { }
