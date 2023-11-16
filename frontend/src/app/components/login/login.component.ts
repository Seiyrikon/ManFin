import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: FormControl;
  password!: FormControl;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private _loginService: LoginService,
  ) { }

  onSubmit() {
    this._loginService.authenticate(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
    })
  }
}
