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
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent],
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
  isLoggedIn:any;
  onSubmit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    if (this.profileForm.value.nameLogin === this.userName.email
       && this.profileForm.value.passLogin === this.userName.password
       || this.isLoggedIn === 'true'
      ) {
        this.service.isShowAccount.set(true);
        localStorage.setItem('isLoggedIn','true');
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
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    if (this.userName) {
      this.userName = JSON.parse(this.userName);
    }
    if(this.isLoggedIn === 'true') {
      this.router.navigate(['/home']);
    }
  }
}
