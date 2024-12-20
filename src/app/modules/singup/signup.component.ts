import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RouterLink } from "@angular/router";

@Component({
    selector:'app-signup',
    standalone:true,
    imports:[RouterLink],
    templateUrl:'./signup.component.html',
    styleUrl:'./signup.component.scss'
})

export class SignupComponent implements OnInit{
    constructor(private http:HttpClient) { }
    ngOnInit(): void {
        
    }
}