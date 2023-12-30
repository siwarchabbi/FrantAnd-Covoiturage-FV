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
  username: string | null = null;
  userId: string | null = null;
  selectedComment: Comment | null = null;


  newComment: Comment = {
    user: '',
    car: '',
    content: '',
    datecreation: new Date(),
  };

  constructor(private service: CarService, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  selectCommentForUpdate(commentId: string | null) {
    this.selectedComment = commentId !== null
      ? this.comments.find(comment => comment._id === commentId) || null
      : null;
  }
  
  
  
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.userId = localStorage.getItem('id');

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

  addComment() {
    this.newComment.user = this.userId!;
    this.newComment.car = this.carId;

    this.subscription = this.service.addComment(this.newComment).subscribe(
      (comment: Comment) => {
        console.log('Added comment:', comment);
        this.fetchComments();
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );

    this.newComment = {
      user: '',
      car: '',
      content: '',
      datecreation: new Date(),
    };
  }
  updateComment() {
    console.log('Entering updateComment function');
    if (this.selectedComment && this.selectedComment._id) {
      console.log('Updating comment with data:', this.selectedComment);
      this.subscription = this.service.updateComment(this.selectedComment).subscribe(
        (updatedComment: Comment) => {
          console.log('Updated comment:', updatedComment);
          this.fetchComments();
          this.selectedComment = null;
        },
        (error) => {
          console.error('Error updating comment:', error);

        }
      );
    }
  }
  
  

  deleteComment(commentId: string | undefined) {
    if (commentId) {
      this.subscription = this.service.deleteComment(commentId).subscribe(
        () => {
          console.log('Deleted comment:', commentId);
          this.fetchComments();
        },
        (error) => {
          console.error('Error deleting comment:', error);
        }
      );
    }
  }
  
}
