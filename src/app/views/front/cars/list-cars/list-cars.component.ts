import { Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../entity/car';
import { Subscription } from 'rxjs';
import { CarService } from '../services/car.service';

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

  constructor(private service: CarService) { }

  searchCarModel(search: string) {
    this.filteredCars = this.cars.filter(
      car => car.model.toLowerCase().includes(search.toLowerCase())
    );
  }
  searchCardepature(search: string) {
    this.filteredCars = this.cars.filter(
      car => car.departureLocation.toLowerCase().includes(search.toLowerCase())
    );
  }
  searchCardestination(search: string) {
    this.filteredCars = this.cars.filter(
      car => car.destinationLocation.toLowerCase().includes(search.toLowerCase())
    );
  }

  deleteCar(id: string) {
    if (confirm("Are you sure you want to delete this car?")) {
      this.service.deleteCar(id).subscribe(
        () => {
          this.cars = this.cars.filter(car => car._id !== id);
          this.filteredCars = this.filteredCars.filter(car => car._id !== id);
          console.table(this.cars);
        },
        (error) => {
          console.error('Error deleting car:', error);
        }
      );
    }
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchCars();
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
