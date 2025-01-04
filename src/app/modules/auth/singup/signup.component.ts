import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ApiService } from "../../../shared/service/api.service";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { LayoutService } from "../../../../@core/layout/layout.service";
import { ProgressSpinner } from 'primeng/progressspinner';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { AuthService } from "../auth.service";

@Component({
    selector:'app-signup',
    standalone:true,
    imports: [
    RouterLink,
    ReactiveFormsModule,
    ProgressSpinner,
    ButtonComponent
],
    templateUrl:'./signup.component.html',
    styleUrl:'./signup.component.scss'
})

export class SignupComponent implements OnInit{
    constructor(private apiService:ApiService, private router:Router) { }
    userData:any;
    showErr:boolean = false;
    isLoggedIn:any;
    isLoading:boolean = false;
    authService = inject(AuthService);
    service = inject(LayoutService);
    form:FormGroup = new FormGroup({
        "name": new FormControl('',Validators.required),
        "email": new FormControl('', Validators.required),
        "password":new FormControl('', Validators.required),
        "avatar":new FormControl('https://picsum.photos/800',Validators.required)
    });
    ngOnInit(): void {
        this.userData = localStorage.getItem('userData');
        this.isLoggedIn = localStorage.getItem('isLoggedIn');
        if(this.isLoggedIn === 'true'){
            this.router.navigate(['/home']);
            this.authService.isLoggedIn = true;
        }else{
            this.service.isShowAccount.set(false);
            this.authService.isLoggedIn = false;
        }
    }
    onSubmit() { 
        this.isLoading = true;
        this.apiService.post('users',this.form.value)
        .subscribe({
            next:(val) => {
                this.service.isShowAccount.set(true);
                localStorage.setItem('userData',JSON.stringify(val));
                localStorage.setItem('isLoggedIn','true');
                this.isLoading = false;
                this.router.navigate(['/home']);
                window.location.reload();
            },
            error:(err) => {
                this.showErr = true;
            },
            complete:() => {

            }
        });
    }
}