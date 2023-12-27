// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrantlayoutsComponent } from './layouts/frantlayouts/frantlayouts.component';
import { AdminlayoutsComponent } from './layouts/adminlayouts/adminlayouts.component';
import { AuthGuard } from './guards/auth.guard'; // Import your AuthGuard

const routes: Routes = [
  {
    path: '',
    component: FrantlayoutsComponent,
    children: [
      { path: '', loadChildren: () => import('./views/front/userlogin/userlogin.module').then(m => m.UserloginModule), },
      { path: 'registeruser', loadChildren: () => import('./views/front/userregister/userregister.module').then(m => m.UserregisterModule) },
      { path: 'home', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
      { path: 'cars', loadChildren: () => import('./views/front/cars/cars.module').then(m => m.CarsModule), canActivate: [AuthGuard] },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    component: AdminlayoutsComponent,
    children: [
      { path: 'dashbord', loadChildren: () => import('./views/admin/dashbord/dashbord.module').then(m => m.DashbordModule), canActivate: [AuthGuard] },
      { path: 'loginadmin', loadChildren: () => import('./views/admin/loginadmin/loginadmin.module').then(m => m.LoginadminModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
