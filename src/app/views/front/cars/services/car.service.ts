import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Car } from '../entity/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'http://localhost:5000/api/car';

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('accessToken')}`
    })
  };

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.url}/`, this.options);
  }

  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${this.url}/`, car, this.options).pipe(
      catchError((error: any) => {
        console.error('Error adding car:', error);
        throw error; // Rethrow the error or handle it as needed
      })
    );
  }

  getCarById(id: string): Observable<Car> {
    return this.httpClient.get<Car>(`${this.url}/${id}`);
  }

  editCar(car: Car): Observable<Car> {
    return this.httpClient.put<Car>(`${this.url}/${car._id}`, car, this.options);
  }

  deleteCar(id: string): Observable<Object> {
    return this.httpClient.delete<Object>(`${this.url}/${id}`);
  }
}
