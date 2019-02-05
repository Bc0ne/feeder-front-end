import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInputModel } from 'src/app/_models/User/login-input.model';
import { IdentityService } from 'src/app/_services/Identity/identity.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loing: LoginInputModel = new LoginInputModel();

  constructor(private fb: FormBuilder, private auth: IdentityService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: false
    });
  }

  signIn(): void{
    //this.auth.login()
  }

}
