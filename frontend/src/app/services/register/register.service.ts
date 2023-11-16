import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _BASE_URL: String = "http://localhost:8080/api/v1/auth";
  constructor(
    private _http: HttpClient
  ) { }

  register(registerForm: any): Observable<Register> {
    return this._http.post<Register>(`${this._BASE_URL}/register`, registerForm);
  }
}
