import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
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

  car = new Car(0, '', new Date('24-12-2023'), '','', 0, '', '', '', '');

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : CarService,
    private router : Router){}

  editBook(f : NgForm){
    this.service.editCar(this.car!).subscribe(
      car=>this.router.navigate(['/cars'])
    )

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        this.service.getCarById(+params['id']).subscribe(
          car => this.car = car
        )
       
      }
    )
  }
}