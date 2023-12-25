import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchcarsComponent } from './searchcars/searchcars.component';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { EditCarsComponent } from './edit-cars/edit-cars.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsRoutingModule } from './cars-routing.module';
import { FormsModule } from '@angular/forms';
import { ListCarsComponent } from './list-cars/list-cars.component';



@NgModule({
  declarations: [
    SearchcarsComponent,
    AddCarsComponent,
    EditCarsComponent,
    CarsDetailsComponent,
    ListCarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule
  ]
})
export class CarsModule { }
