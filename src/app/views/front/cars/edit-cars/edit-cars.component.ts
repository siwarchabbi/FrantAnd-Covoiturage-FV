import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';


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
    // Get carId from route parameters
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
    // Handle image file change event
    this.imageFile = event.target.files[0];
  }

  updateCar() {
    this.carService.updateCar(this.carId, this.carData, this.imageFile).subscribe(
      (data) => {
        // Handle success, e.g., show a success message, navigate to car list, etc.
        console.log('Car updated successfully:', data);
        this.router.navigate(['/cars']); // Redirect to car list page
      },
      (error) => {
        // Handle error, e.g., show an error message
        console.error('Error updating car:', error);
      }
    );
  }
}
