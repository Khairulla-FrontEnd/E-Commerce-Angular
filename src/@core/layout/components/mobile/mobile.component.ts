import { Component, OnInit } from "@angular/core";
import { RouterLink, Router } from '@angular/router';

@Component({
    selector:'app-mobile',
    standalone:true,
    imports:[
        RouterLink
    ],
    templateUrl:'./mobile.component.html',
    styleUrl:'./mobile.component.scss'
})

export class MobileComponent implements OnInit{
    icons:string[] = ['house','search','heart','cart'];
    link:string[] = ['/home','/search','/wishlist','/cart'];
    activePath:string = window.location.pathname;
    constructor(private router:Router) { }

    ngOnInit(): void {
        this.router.events.subscribe((val) => {
                if(val.constructor.name === 'NavigationEnd') {
                    this.activePath = window.location.pathname;
                }
        })
        if(window.location.pathname === '/signup'){
            this.activePath = '/home';
        }    
    }

    setActive(link:string): void {
        this.activePath = link;
    }
}