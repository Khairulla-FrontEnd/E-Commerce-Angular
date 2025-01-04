import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { environment } from "../../../environments/environment";

@Component({
    selector:'app-about',
    standalone:true,
    imports:[
        RouterLink
    ],
    templateUrl:'./about.component.html',
    styleUrl:'./about.component.scss'
})

export class AboutComponent {
    protected readonly environment = environment;
    isLoggedIn:string | null = localStorage.getItem('isLoggedIn');

    cards:any = [
        {
            imgSrc:'./assets/media/about/Home.png',
            title:'10.5k',
            text:'Sellers active our site',
        },
        {
            imgSrc:'./assets/media/about/Money.png',
            title:'33k',
            text:'Monthly Product Sale',
        },
        {
            imgSrc:'./assets/media/about/Bag.png',
            title:'45.5k',
            text:'Customer active in our site',
        },
        {
            imgSrc:'./assets/media/about/Money_Within_Bag.png',
            title:'25k',
            text:'Anual gross sale in our site',
        },
    ];
    
}