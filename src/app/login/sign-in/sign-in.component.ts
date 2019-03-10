import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInputModel } from 'src/app/_models/User/login-input.model';
import { IdentityService } from 'src/app/_services/Identity/identity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  login: LoginInputModel = new LoginInputModel();
  newAccount: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private auth: IdentityService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]],
      rememberMe: false
    });
  }

  signIn(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.dirty) {
        const user = { ...this.login, ...this.loginForm.value }
        this.auth.login(user).subscribe(
          user => this.onLoginSuccess(user),
          error => console.log(error)
        );
      }
    }
  }

  onLoginSuccess(user): void {
    //console.log(user);
    this.router.navigate(['/welcome']);
  }


  createNewAccount() {
    this.newAccount = true;
  }
}
