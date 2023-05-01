import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http
      .post<{ userId: number }>('http://localhost:8080/api/users/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/survey']);
        },
        (error) => {
          console.error('Error logging in:', error);
        }
      );
  }

  ngOnInit(): void {
  }

}
