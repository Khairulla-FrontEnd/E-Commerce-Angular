import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  profileForm = new FormGroup({
    nameLogin: new FormControl('', Validators.required),
    passLogin: new FormControl('', Validators.required),
  });
  onSubmit() {
    console.log(this.profileForm.value);

    if (this.profileForm.value.nameLogin === this.userName.email) {
      console.log(true);
      this.router.navigate(['/home']);
    } else {
      console.log(false);
    }
  }
  realUser: any;
  userName: any;

  ngOnInit(): void {
    this.userName = localStorage.getItem('userData');
    if (this.userName) {
      this.userName = JSON.parse(this.userName);
    }
  }
}
