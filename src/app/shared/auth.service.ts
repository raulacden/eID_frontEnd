import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  signIn(formData: FormData) {
    formData.get('user');
    formData.get('password');
    this.http
      .get<any>(`${this.endpoint}/login`)
      .subscribe((res: any) => {
        if ((res.user == formData.get('user')) && (res.pass ==formData.get('password'))) {
          localStorage.setItem('token', "TOKEN_AUTH");
          localStorage.setItem('role', "User");
          this.router.navigate(['/list']);
        } else {
          window.alert('Invalid Credentials');
        }
      });
    
  }

  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token')!;
    return token !== null ? true : false;
  }
  
}
