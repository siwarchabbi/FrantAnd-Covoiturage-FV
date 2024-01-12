import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: LoginService, private router: Router) {}
  
  ngOnInit(): void {
    // Initialization logic here
  }

  login(loginForm: NgForm): void {
    // Check if the form is valid
    if (loginForm.valid) {
      const email = loginForm.value.email;
      const password = loginForm.value.password;
  
      // Call the login service
      this.authService.login(email, password).subscribe(
        (response) => {
          // Handle the login success logic
          console.log(response);
  
          // Save the accessToken to local storage
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('username', response.user.username);
          localStorage.setItem('email', response.user.email);
          localStorage.setItem('id', response.user.id);
  
          // Show SweetAlert for login success
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You have successfully logged in.',
          });
  
          this.router.navigate(['/home']); // Navigate to the home page on success
        },
        (error) => {
          // Handle the login failure logic
          console.error('Login failed:', error);
  
          // Show SweetAlert for login failure
          Swal.fire({
            icon: 'error' ,
            title: 'Login Failed',
            text: 'Invalid email or password. Please check your credentials.',
          });
        }
      );
    } else {
      console.error('Form is invalid. Email or password is empty or not accessible.');
    }
  }
  
}
