import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ApiService } from "../../shared/service/api.service";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { catchError, of } from "rxjs";

@Component({
    selector:'app-signup',
    standalone:true,
    imports:[RouterLink,
        ReactiveFormsModule
    ],
    templateUrl:'./signup.component.html',
    styleUrl:'./signup.component.scss'
})

export class SignupComponent{
    constructor(private apiService:ApiService, private router:Router) { }

    showErr:boolean = false;
    form:FormGroup = new FormGroup({
        "name": new FormControl('',Validators.required),
        "email": new FormControl('', Validators.required),
        "password":new FormControl('', Validators.required),
        "avatar":new FormControl('https://picsum.photos/800',Validators.required)
    });
    onSubmit() { 
        this.apiService.post('users',this.form.value)
        .subscribe({
            next:(val) => {
                localStorage.setItem('userData',JSON.stringify(val));
                this.router.navigate(['/home']);
            },
            error:(err) => {
                this.showErr = true;
            },
            complete:() => {

            }
        });
    }
}