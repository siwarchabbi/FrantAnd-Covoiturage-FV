import { Injectable } from '@angular/core';
import { Car } from '../entity/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private Cars : Car[] = [];

  private url = "http://localhost:5000/api/car";

  options = {headers : new HttpHeaders(
    {
      'content-type' : "application/json",
      'Authorization' : "Bearer " + window.localStorage.getItem("accessToken")
    }
  )}

  constructor(private httpClient : HttpClient) { }

  getCars():Observable<Car[]>{
    return this.httpClient.get<Car[]>( `${this.url}/`, this.options);

  }

  addCar(
    image: String,
    departureDateTime: Date,
    departureLocation: String,
    destinationLocation: String,
    seatPrice: number,
    seatAvailable: String,
    model: String,
    matricule: String,
    status: String
  ): Observable<Car> {
    const options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('accessToken'),
      }),
    };

    return this.httpClient.post<Car>(
      `${this.url}/`,
      {
        image,
        departureDateTime,
        departureLocation,
        destinationLocation,
        seatPrice,
        seatAvailable,
        model,
        matricule,
        status,
      },
      options
    );
  }


  getCarById(id : number): Observable<Car>{

    return this.httpClient.get<Car>(this.url + "/" + id)
  }

  editCar(car : Car) : Observable<Car>{
    return this.httpClient.put<Car>(
      `${this.url}/${car.id}`,
      car,
      this.options)
  }

  deleteCar(id : number) : Observable<Object>{

    return this.httpClient.delete<Object>(`${this.url}/${id}`)
  }

}
