import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm): void {
    if (registerForm.valid) {
      const username = registerForm.value.username;
      const email = registerForm.value.email;
      const password = registerForm.value.password;

      this.loginService.register(username, email, password).subscribe(
        (response) => {
          console.log(response);

          // Show SweetAlert for registration success
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'You have successfully registered.',
          });
          this.router.navigate(['/']);
          // You might want to redirect or show a success message
        },
        (error) => {
          console.error('Registration failed:', error);

          // Show SweetAlert for registration failure
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'Registration failed. Please try again.',
          });
        }
      );
    } else {
      console.error('Form is invalid. Check the fields.');
    }
  }

  validateInput(control: any, validationType: string): boolean {
    return control.touched && control.hasError(validationType);
  }
}
