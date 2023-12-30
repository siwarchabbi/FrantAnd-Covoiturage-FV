import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../entity/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {

  @Input() car: Car | null = null;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');

    if (carId) {
      this.carService.getCarById(carId).subscribe(
        (data: Car) => {
          this.car = data;
        },
        error => {
          console.error('Error fetching car:', error);
        }
      );
    }
  }
}
