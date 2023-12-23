import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const ID_KEY = 'auth-id';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5000/api/users/login'; 
  private apiUrl2 = 'http://localhost:5000/api/users'; 


  private userData: any;

  constructor(private http: HttpClient) {}

  setUserData(userData: any) {
    this.userData = userData;
  }

  getUserData() {
    return this.userData;
  }

  getJwtToken() {
    return localStorage.getItem('token') || '';
  }
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(this.apiUrl, body);
  }
  register(username: string, email: string, password: string): Observable<any> {
    const body = { username, email, password };
    return this.http.post(`${this.apiUrl2}/register`, body);
  }
 

  

  // get the user from session storage
  getToken(): string | null {
    return window.sessionStorage.getItem(ID_KEY) !== null ? window.sessionStorage.getItem(ID_KEY) : null;
  }
}