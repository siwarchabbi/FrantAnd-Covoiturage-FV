import { Component, OnInit } from '@angular/core';
import { CarService } from '../../cars/services/car.service';
import { Car } from '../../cars/entity/car';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: string | null = null;
  private cars: Car[] = [];
  filteredCars: Car[] = [];
  activeCar?: Car;
  subscription?: Subscription;

  constructor(private service: CarService ) { }



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


  searchCars(searchData: { departure: string, destination: string }) {
    const { departure, destination } = searchData;

    if (!departure && !destination) {
      // Both fields are empty, show all cars
      this.filteredCars = [...this.cars];
    } else {
      // Perform filtering based on departure and destination
      this.filteredCars = this.cars.filter(
        car => car.departureLocation.toLowerCase().includes(departure.toLowerCase()) &&
          car.destinationLocation.toLowerCase().includes(destination.toLowerCase())
      );
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
