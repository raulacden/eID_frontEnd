import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = {};

  constructor(public router: Router, private apiService: ApiService) { }

  signIn(formData: FormData) {
    formData.get('user');
    formData.get('password');

    this.apiService.getUser().subscribe((data) => {
      if ((data.user == formData.get('user')) && (data.pass == formData.get('password'))) {
        localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
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

  get getToken(): string {    
    const token = localStorage.getItem('token')!;
    return token !== null ? token : '';
  }

  get getRole(): string {    
    const role = localStorage.getItem('role')!;
    return role !== null ? role : '';
  }
  
}
