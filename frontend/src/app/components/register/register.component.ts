import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
    console.warn(this.registerForm.value);
  }
}
