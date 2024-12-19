import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  nameLogin: string = '';
  passLogin: string = '';

  onSubmit() {
    this.nameLogin;
    this.passLogin;
  }
  onClick() {
    console.log([this.nameLogin, this.passLogin]);
  }
}
