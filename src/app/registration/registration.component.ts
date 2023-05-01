import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email = '';
  password = '';

  constructor(private http: HttpClient) {}

  register() {
    this.http
      .post('http://localhost:8080/api/users/register', {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        () => {
          console.log('User registered');
        },
        (error) => {
          console.error('Error registering user:', error);
        }
      );
  }

  ngOnInit(): void {
  }

}
