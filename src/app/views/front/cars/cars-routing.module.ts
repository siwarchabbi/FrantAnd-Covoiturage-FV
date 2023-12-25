import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { EditCarsComponent } from './edit-cars/edit-cars.component';
import { ListCarsComponent } from './list-cars/list-cars.component';


const routes: Routes = [
  {path:'details', component : CarsDetailsComponent},
  {path:'add', component : AddCarsComponent },
  {path:'edit/:id', component: EditCarsComponent},
  {path:'list', component: ListCarsComponent },
  {path:'', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
