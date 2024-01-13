import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../entity/car';
import { Subscription } from 'rxjs';
import { CarService } from '../services/car.service';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit, OnDestroy {

  private cars: Car[] = [];
  filteredCars: Car[] = [];
  activeCar?: Car;
  subscription?: Subscription;
  userId: string | null = null;
  showMoreCars: boolean = false;
  isButtonClicked = false;
  favoritesSubject = new BehaviorSubject<string[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  constructor(private service: CarService) { }

  showMore() {
    this.showMoreCars = true;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchCars();
    this.userId = localStorage.getItem('id');
  }
  addToFavorites(car: Car): void {
    if (car.isButtonClicked) {
      // Car is already added to favorites, do nothing
      return;
    }

    if (this.userId !== null && car._id !== undefined) {
      // Check if the car is already in favorites
      const isAlreadyInFavorites = this.favoritesSubject.value.includes(car._id);

      if (!isAlreadyInFavorites) {
        // Perform the logic for adding to favorites
        this.favoritesSubject.pipe(take(1)).subscribe(favorites => {
          this.favoritesSubject.next([...favorites, car._id!]); // Use the non-null assertion operator (!)
        });

        this.service.addCarToFavorites(this.userId, car._id).subscribe(
          () => {
            console.log('Car added to favorites successfully.');

            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Car added to favorites successfully!',
            });

            // Set isButtonClicked to true to prevent multiple clicks
            car.isButtonClicked = true;
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
        console.log('Car is already in favorites.');
      }
    } else {
      console.error('User ID or Car ID is null or undefined. Unable to add car to favorites.');
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
