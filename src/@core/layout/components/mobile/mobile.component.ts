import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
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
    icons:string[] = ['house','search','heart','cart'];
    link:string[] = ['/home','/search','/wishlist','/cart'];
    activePath:string = window.location.pathname;

    ngOnInit(): void {
        if(window.location.pathname === '/signup'){
            this.activePath = '/home';
        }    
    }

    setActive(link:string): void {
        this.activePath = link;
    }
}