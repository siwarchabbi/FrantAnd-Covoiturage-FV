import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorieService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}



  getFavorites(userId: string): Observable<any> {
    const url = `${this.apiUrl}/favorie/${userId}`;
    return this.http.get(url);
  }

  removeFavorite(favoriteId: string): Observable<any> {
    const url = `${this.apiUrl}/favorie/${favoriteId}`;
    return this.http.delete(url);
  }
}
