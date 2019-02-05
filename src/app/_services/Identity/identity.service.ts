import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { LoginInputModel } from 'src/app/_models/User/login-input.model';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  private baseUrl = "http://mahmoudslama-001-site1.dtempurl.com/api/Identity/";
  private developmentUrl = "http://localhost:5001/api/Identity/"

  constructor(private http: HttpClient) { }

  login(loginInputModel: LoginInputModel): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.developmentUrl + 'login', loginInputModel, {headers: headers});
  }
}
