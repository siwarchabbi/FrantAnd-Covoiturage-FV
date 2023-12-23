import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrantlayoutsComponent } from './frantlayouts/frantlayouts.component';
import { AdminlayoutsComponent } from './adminlayouts/adminlayouts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FrantlayoutsComponent,
    AdminlayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
