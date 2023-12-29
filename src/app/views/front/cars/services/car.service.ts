import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Car } from '../entity/car';
import { Comment } from '../entity/Comment';


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



  getCommentsByCarId(carId: string): Observable<Comment[]> {
    const url = `${this.url}/api/comments/${carId}`;
    return this.httpClient.get<Comment[]>(url);
  }

  addComment(comment: Comment): Observable<Comment> {
    const url = `${this.url}/api/comments/${comment.car}`;
    return this.httpClient.post<Comment>(url, comment);
  }

  updateComment(comment: Comment): Observable<Comment> {
    const url = `${this.url}/api/comments/${comment._id}`;
    return this.httpClient.put<Comment>(url, comment, this.options);
  }

  deleteComment(commentId: string): Observable<void> {
    const url = `${this.url}/api/comments/${commentId}`;
    return this.httpClient.delete<void>(url, this.options);
  }
  

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.url}/`, this.options);
  }

  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${this.url}/`, car, this.options).pipe(
      catchError((error: any) => {
        console.error(error);
        throw error; // rethrow the error or handle it as needed
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
