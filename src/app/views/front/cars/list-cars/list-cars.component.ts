import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../entity/car';
import { Subscription } from 'rxjs';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit , OnDestroy {

  cars: Car[] = [];
  filteredCars: Car[] = [];
  activeCar?: Car;
  subscription?: Subscription;

  constructor(private service : CarService){}

  searchCar(search : string){
    this.filteredCars = this.cars.filter(
      b=>b.model.toLowerCase().includes(search.toLowerCase())
    )
  }



  deleteCar(id: number) {
    if (confirm("Are you sure you want to delete this car?"))
      this.service.deleteCar(id).subscribe(
        () => {
          this.cars = this.cars.filter(car => car.id !== id);
          this.filteredCars = this.filteredCars!.filter(car => car.id !== id);
          console.table(this.cars);
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.getCars().subscribe(
      (cars) => {

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
