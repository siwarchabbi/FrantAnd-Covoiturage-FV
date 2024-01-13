
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarsModule } from '../cars/cars.module';
import { AllCarsComponent } from '../cars/all-cars/all-cars.component';
import { SearchcarsComponent } from '../cars/searchcars/searchcars.component';



@NgModule({
  declarations: [
    HomeComponent,


  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    CarsModule,

  ]
})
export class HomeModule { }
