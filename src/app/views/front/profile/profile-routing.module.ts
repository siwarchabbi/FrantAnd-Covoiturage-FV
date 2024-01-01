import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from 'src/app/guards/auth.guard';




const routes: Routes = [
    {path:'getprofile/:id', component : ProfileComponent ,canActivate: [AuthGuard] },
    {path:'update/:id', component : EditProfileComponent ,canActivate: [AuthGuard]},

  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ProfileRoutingModule { }
