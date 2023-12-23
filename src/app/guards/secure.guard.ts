import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {
  constructor(public tokenStorageService: LoginService, public router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //check user is logged in or not
    if(this.tokenStorageService.getToken() !== null) {
      alert("Accès refusé, vous êtes déjà connecté !!!");
      this.router.navigate(['/home']);
    }
    return true;
    }

  
}
