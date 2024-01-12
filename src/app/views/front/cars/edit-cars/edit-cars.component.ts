import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent  implements OnInit {
  carId!: string;
  carData: any = {};
  imageFile!: File;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.carId = params['id'];
      this.getCarDetails();
    });
  }

  getCarDetails() {
    this.carService.getCarById(this.carId).subscribe((data) => {
      this.carData = data;
    });
  }

  onImageChange(event: any) {
    this.imageFile = event.target.files[0];
  }



updateCar() {
  this.carService.updateCar(this.carId, this.carData, this.imageFile).subscribe(
    (data) => {
      // Handle success
      console.log('Car updated successfully:', data);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Car updated successfully!',
      });

      this.router.navigate(['/cars']); // Redirect to car list page
    },
    (error) => {
      // Handle error
      console.error('Error updating car:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update car. Please try again.',
      });
    }
  );
}

}
