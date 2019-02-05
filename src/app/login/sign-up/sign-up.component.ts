import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityService } from 'src/app/_services/Identity/identity.service';
import { SignUpModel } from 'src/app/_models/User/sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  signUpModel: SignUpModel = new SignUpModel();

  constructor(private fb: FormBuilder, private identityService: IdentityService) { }

  ngOnInit() {

    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]]
    })
  }


  signUp(): void {
    if (this.signUpForm.valid) {
      if (this.signUpForm.dirty) {
        const user = { ...this.signUpModel, ...this.signUpForm.value };
        //console.log(user);
        this.identityService.signUp(user).subscribe(
          result => console.log(result),
          error => console.log(error)
        );
      }
    }
  }
}
