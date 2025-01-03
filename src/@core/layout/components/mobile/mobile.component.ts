import { Component, OnInit } from "@angular/core";
import { RouterLink } from '@angular/router';

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
    icons:string[] = ['house','search','gear','heart','cart'];
    link:string[] = ['/home','/search','/settings','/wishlist','/cart'];
    activePath:string = '';

    ngOnInit(): void {
        this.activePath = window.location.pathname;
    }

    setActive(link:string): void {
        this.activePath = link;
    }
}