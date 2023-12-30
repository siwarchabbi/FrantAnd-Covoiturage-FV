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
  userId: string | null = null;
  selectedFile: File | null = null;
  car: Car = new Car('', '', new Date(), '', 0, '', '', '', 'pending', '');

  constructor(private service: CarService, private router: Router) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  createCar(form: NgForm): void {
    if (form.invalid || !this.selectedFile) {
      return;
    }

    const carData = {
      user: this.userId,
      destinationLocation: form.value.destinationLocation,
      departureDateTime: form.value.departureDateTime,
      departureLocation: form.value.departureLocation,
      seatPrice: form.value.seatPrice,
      seatAvailable: form.value.seatAvailable,
      model: form.value.model,
      matricule: form.value.matricule,
      status: form.value.status,
      imageName: this.selectedFile.name,
    };

    this.service.createCar(carData, this.selectedFile).subscribe(
      (response) => {
        console.log('Car created successfully:', response);
        form.resetForm();
      },
      (error) => {
        console.error('Error creating car:', error);
      }
    );
  }
}
