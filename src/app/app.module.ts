import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { FormsModule } from '@angular/forms';
import { ViewsComponent } from './views/views/views.component';
import { ProfileRoutingModule } from './views/front/profile/profile-routing.module';
import { NavbarComponent } from './views/front/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    FormsModule,
    ProfileRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
