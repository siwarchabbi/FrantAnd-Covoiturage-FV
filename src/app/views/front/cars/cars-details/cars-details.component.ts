// cars-details.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarService } from '../services/car.service';
import { Car } from '../entity/car';
import { Comment } from '../entity/Comment';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit, OnDestroy {
  carId!: string;
  car!: Car;
  private subscription!: Subscription;
  comments: Comment[] = [];

  constructor(private service: CarService, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = params['id'];
      this.fetchCarDetails();
      this.fetchComments();
    });
  }

  fetchComments() {
    this.subscription = this.service.getCommentsByCarId(this.carId).subscribe(
      (comments: Comment[]) => {
        console.log('Fetched comments:', comments);
        this.comments = comments;
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
  

  fetchCarDetails() {
    this.subscription = this.service.getCarById(this.carId).subscribe(
      (car) => {
        console.log('Fetched car details:', car);
        this.car = car;
      },
      (error) => {
        console.error('Error fetching car details:', error);
      }
    );
  }
}
