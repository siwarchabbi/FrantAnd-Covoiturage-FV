import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Car } from '../entity/car';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.css'],
})
export class AddCarsComponent {
  car: Car = new Car('', '', new Date(), '', 0, '', '', '', 'pending', ''); // Use a single Car instance instead of an array

  constructor(private service: CarService, private router: Router) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

  }

  addCars(f: NgForm): void {
    console.log('Form data:', f.value);
    this.car.image = 'assests/images';
    this.service.addCar(this.car).subscribe(
      (car) => {
        console.log('Response from server:', car);
        this.router.navigate(['/cars/list']).then(() => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/cars/list']);
        });
      },
      (error) => console.error('Error from server:', error)
    );
  }
}
