import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { LoginInputModel } from 'src/app/_models/User/login-input.model';
import { updateBinding } from '@angular/core/src/render3/instructions';
import { SignUpModel } from 'src/app/_models/User/sign-up.model';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  private baseUrl = "http://mahmoudslama-001-site1.dtempurl.com/api/Identity/";
  private developmentUrl = "http://localhost:5001/api/Identity/";

  constructor(private http: HttpClient) { }

  login(signInInputModel: LoginInputModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.developmentUrl + 'login', signInInputModel, { headers: headers });
  }

  signUp(signUpInputModel: SignUpModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.developmentUrl + 'register', signUpInputModel, { headers: headers });
  }
}
