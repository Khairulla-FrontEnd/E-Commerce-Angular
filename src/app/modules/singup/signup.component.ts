import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:'app-signup',
    standalone:true,
    imports:[],
    templateUrl:'./signup.component.html',
    styleUrl:'./signup.component.scss'
})

export class SignupComponent implements OnInit{
    constructor(private http:HttpClient) { }
    ngOnInit(): void {
        this.http.get('')
        .subscribe((val:any) => console.log(val)) 
        ;
    }
}