import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavorieuserComponent } from './favorieuser/favorieuser.component';

const routes: Routes = [
  {path:'',component: FavorieuserComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavorieuserRoutingModule { }
