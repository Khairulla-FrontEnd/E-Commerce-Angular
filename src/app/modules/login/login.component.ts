import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  nameLogin: string = '';
  passLogin: string = '';

  profileForm = new FormGroup({
    nameLogin: new FormControl('', Validators.required),
    passLogin: new FormControl('', Validators.required),
  });
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
