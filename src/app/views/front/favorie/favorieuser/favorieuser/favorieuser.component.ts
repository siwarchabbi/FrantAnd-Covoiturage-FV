import { Component, OnInit } from '@angular/core';
import { FavorieService } from '../../service/favorie.service';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-favorieuser',
  templateUrl: './favorieuser.component.html',
  styleUrls: ['./favorieuser.component.css']
})
export class FavorieuserComponent implements OnInit {

  favorites: any[] = []; // Adjust the type based on your response structure
  userId: string | null = null;

  constructor(private favoriteService: FavorieService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    if (this.userId) {
      this.getFavorites();
    }
  }

  getFavorites(): void {
    if (this.userId !== null) {
    this.favoriteService.getFavorites(this.userId).subscribe(
      (favorites) => {
        console.log('Fetched favorites:', favorites);
        this.favorites = favorites;
      },
      (error) => {
        console.error('Error fetching favorites:', error);
      }
    );
    }
  }

  deleteFavorite(favoriteId: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.favoriteService.removeFavorite(favoriteId).subscribe(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Favorite deleted successfully.',
            });

            // Update the local favorites array after deletion
            this.favorites = this.favorites.filter(favorite => favorite._id !== favoriteId);
          },
          (error) => {
            console.error('Error deleting favorite:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        );
      }
    });
  }


}
