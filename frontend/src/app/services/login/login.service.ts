import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _BASE_URL: String = "http://localhost:8080/api/v1/auth";
  constructor(
    private _http: HttpClient
  ) { }

  authenticate(loginForm: any): Observable<Login> {
    return this._http.post<Login>(`${this._BASE_URL}/authenticate`, loginForm);
  }
}
