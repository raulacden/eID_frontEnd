import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpperCaseValidator } from '../shared/upperCase.validator';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService) { }
  
  registerForm:any =  FormGroup;
  submitted = false;

  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
  
    this.submitted = true;
    
    if (!this.registerForm.valid) {
        return;
    }else {
      
      var myFormData = new FormData();
      
      myFormData.append('user', this.registerForm.value.user);
      myFormData.append('password', this.registerForm.value.password);
      this.authService.signIn(myFormData);      
    }  
    
  
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), UpperCaseValidator]],
      });
  }

}
