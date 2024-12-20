import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { LayoutService } from '../../../@core/layout/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  showErr:boolean = false;
  constructor(private router: Router) {}

  service = inject(LayoutService);
  profileForm = new FormGroup({
    nameLogin: new FormControl('', Validators.required),
    passLogin: new FormControl('', Validators.required),
  });
  onSubmit() {
    if (this.profileForm.value.nameLogin === this.userName.email
       && this.profileForm.value.passLogin === this.userName.password
      ) {
        this.service.isShowAccount.set(true);
        localStorage.setItem('userData',JSON.stringify(this.userName));
      this.router.navigate(['/home']);
    } else {
      this.showErr = true;
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
