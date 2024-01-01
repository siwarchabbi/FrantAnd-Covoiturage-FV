import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { EditCarsComponent } from './edit-cars/edit-cars.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {path:'details/:id', component : CarsDetailsComponent ,canActivate: [AuthGuard] },
  {path:'add', component : AddCarsComponent ,canActivate: [AuthGuard] },
  {path:'edit/:id', component: EditCarsComponent,canActivate: [AuthGuard] },
  {path:'list', component: ListCarsComponent ,canActivate: [AuthGuard] },
  {path:'', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
