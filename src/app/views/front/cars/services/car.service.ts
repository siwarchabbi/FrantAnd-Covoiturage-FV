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
  private apiUrl = 'http://localhost:5000/api/favorie';


  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('accessToken')}`
    })
  };

  constructor(private httpClient: HttpClient) { }

  addCarToFavorites(userId: string, carId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}/${carId}`;
    return this.httpClient.post(url, {});
  }

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

  createCar(carData: any, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    Object.keys(carData).forEach((key) => {
      formData.append(key, carData[key]);
    });

    return this.httpClient.post<any>(`${this.url}`, formData);
  }


  getCarById(id: string): Observable<Car> {
    return this.httpClient.get<Car>(`${this.url}/${id}`);
  }

  updateCar(carId: string, carData: any, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    for (const key in carData) {
      formData.append(key, carData[key]);
    }
    return this.httpClient.put(`${this.url}/${carId}`, formData);
  }


  deleteCar(id: string): Observable<Object> {
    return this.httpClient.delete<Object>(`${this.url}/${id}`);
  }
}
