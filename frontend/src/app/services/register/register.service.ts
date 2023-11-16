import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _BASE_URL: String = "http://localhost:8080/api/v1/auth";
  constructor(
    private _http: HttpClient
  ) { }
}
