import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {

  constructor(private loginService: LoginService, private router: Router) {}

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
