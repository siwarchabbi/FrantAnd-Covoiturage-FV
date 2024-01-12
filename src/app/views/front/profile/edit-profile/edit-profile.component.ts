import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userId!: string;
  userProfile: any = {};

  constructor(private route: ActivatedRoute, private userService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    this.userService.getUserProfile(this.userId).subscribe(
      (profile) => {
        this.userProfile = profile;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateProfile(form: NgForm): void {
    this.userService.updateUserProfile(this.userId, this.userProfile).subscribe(
      (updatedProfile) => {
        this.userProfile = updatedProfile;
        this.router.navigate(['/profile/getprofile', this.userId]);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
