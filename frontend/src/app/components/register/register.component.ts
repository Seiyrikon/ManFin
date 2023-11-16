import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private _registerService: RegisterService,
  ) { }

  first_name!: FormControl;
  last_name!: FormControl;
  username!: FormControl;
  password!: FormControl;

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    this._registerService.register(this.registerForm.value).subscribe(
      (response) => {
       console.log(response);
        
      })
  }
}
