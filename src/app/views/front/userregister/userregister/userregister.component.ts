import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(private loginService: LoginService) { }

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
          alert('Registration successful!'); // You might want to redirect or show a success message
        },
        (error) => {
          console.error('Registration failed:', error);
          alert('Registration failed. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid. Check the fields.');
    }
  }
}
