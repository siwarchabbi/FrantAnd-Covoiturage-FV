import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrantlayoutsComponent } from './layouts/frantlayouts/frantlayouts.component';
import { AdminlayoutsComponent } from './layouts/adminlayouts/adminlayouts.component';

const routes: Routes = [
  {path:'' , component : FrantlayoutsComponent ,children:[
    {path:'home' , loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule) },
    {path:'loginuser' , loadChildren:()=>import('./views/front/userlogin/userlogin.module').then(m=>m.UserloginModule) },
    {path:'registeruser' , loadChildren:()=>import('./views/front/userregister/userregister.module').then(m=>m.UserregisterModule) }


  ]},
  {path:'admin' , component : AdminlayoutsComponent , children:[
    {path:'dashbord' , loadChildren:()=>import('./views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule) },
    {path:'loginadmin' , loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule) }

  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
