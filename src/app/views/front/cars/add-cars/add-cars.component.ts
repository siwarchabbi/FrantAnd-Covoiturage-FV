import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ListCarsComponent } from '../list-cars/list-cars.component';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.css']
})
export class AddCarsComponent {

  constructor(
    private service: CarService,
    private router: Router
  ) { }

  addCars(f: NgForm): void {
    console.log('Form data:', f.value);
    this.service.addCar(f.value).subscribe(
      car => {
        console.log('Response from server:', car);
        this.router.navigate(['/cars/list']);
      },
      error => console.error('Error from server:', error)
    );
  }
}
