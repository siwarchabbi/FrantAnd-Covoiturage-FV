import { Component, Input,  } from '@angular/core';
import { Car } from '../entity/car';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent  {

   @Input() car?: Car;

}
