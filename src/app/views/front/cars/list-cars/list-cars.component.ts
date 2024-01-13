import { Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../entity/car';
import { Subscription } from 'rxjs';
import { CarService } from '../services/car.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit, OnDestroy {

  private cars: Car[] = [];
  filteredCars: Car[] = [];
  activeCar?: Car;
  subscription?: Subscription;
  userId: string | null = null;

  constructor(private service: CarService ) { }


  searchCars(searchData: { departure: string, destination: string }) {

    const { departure, destination } = searchData;
    this.filteredCars = this.cars.filter(
      car => car.departureLocation.toLowerCase().includes(departure.toLowerCase()) &&
      car.destinationLocation.toLowerCase().includes(destination.toLowerCase())
    );
  }


  deleteCar(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this car!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteCar(id).subscribe(
          () => {
            this.cars = this.cars.filter(car => car._id !== id);
            this.filteredCars = this.filteredCars.filter(car => car._id !== id);
            console.table(this.cars);

            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Car deleted successfully!'
            });
          },
          (error) => {
            console.error('Error deleting car:', error);
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Car deletion was cancelled :)', 'error');
      }
    });
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchCars();
    this.userId = localStorage.getItem('id');


  }
  addToFavorites(carId: string | undefined): void {
    if (this.userId !== null) {
      if (carId !== undefined) {
        this.service.addCarToFavorites(this.userId, carId).subscribe(
          () => {
            console.log('Car added to favorites successfully.');

            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Car added to favorites successfully!',
            });

          },
          (error) => {
            console.error('Error adding car to favorites:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while adding the car to favorites.',
            });
          }
        );
      } else {
        console.error('Car ID is undefined. Unable to add car to favorites.');
      }
    } else {
      console.error('User ID is null. Unable to add car to favorites.');
    }
  }




  fetchCars() {
    this.subscription = this.service.getCars().subscribe(
      (cars) => {
        console.log('Fetched cars:', cars);
        if (Array.isArray(cars)) {
          this.cars = cars;
          this.filteredCars = [...this.cars];
        } else {
          console.error("Unexpected response format. Expected an array.");
        }
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
}
