import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Car } from '../entity/car';
import { CarService } from '../services/car.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent implements OnInit {

  car: Car = new Car( '', new Date(), '', '', 0, '', '', '', ''); // Adjust the default date as needed

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CarService,
    private router: Router
    ) {}

  editCar(f: NgForm) {
    this.service.editCar(this.car).subscribe(
      updatedCar => {
        console.log('Car updated:', updatedCar);
        this.router.navigate(['/cars/list']);
      },
      error => {
        console.error('Error updating car:', error);
        // Handle the error as needed
      }
    );
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const carId = params['id'];
      this.service.getCarById(carId).subscribe(
        car => {
          console.log('Fetched car by id:', car);
          this.car = car;
        },
        error => {
          console.error('Error fetching car by id:', error);
          // Handle the error as needed
        }
      );
    });
  }
}
