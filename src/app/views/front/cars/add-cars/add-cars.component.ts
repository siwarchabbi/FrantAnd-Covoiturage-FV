import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  selectedFile: File | null = null;
  
  onFileChange(event: any): void {
    
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.selectedFile = files[0];
    }
  }
  addCars(f: NgForm): void {
    console.log('Form data:', f.value);
    this.service.addCar(f.value).subscribe(
      car => {
        console.log('Response from server:', car);
        this.router.navigate(['/cars/list']).then(() => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/cars/list']);
        });
      },
      error => console.error('Error from server:', error)
    );
  }
}
