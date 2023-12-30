import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Car } from '../entity/car'; // Import your Car model

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.css'],
})
export class AddCarsComponent {
  car: Car[] = [];

  constructor(private service: CarService, private router: Router) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.car.image = file;
  }

  addCars(f: NgForm): void {
    console.log('Form data:', f.value);

    this.service.addCar(car).subscribe(
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
