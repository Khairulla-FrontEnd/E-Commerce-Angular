import { Component } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";


@Component({
    selector:'app-footer',
    standalone:true,
    imports:[
        NgOptimizedImage,
        RouterLink
    ],
    templateUrl:'./footer.component.html',
    styleUrl:'./footer.component.scss'
})

export class FooterComponent {
    protected readonly environment = environment;

    year:number = new Date().getFullYear();

    lists:any = [
        {
            title:"Support",
            list:["Urganch, Khorazm region, Uzbekistan.","khairulla2008@outlook.com","+998-97-858-6000"],
        },
        {
            title:"Account",
            list:["My Account","Login / Register","Cart","Wishlist","Shop"],
            links:['/profile','/signup','/cart','/wishlist','/search']
        },
    ];
    icons:string[] = ['facebook','twitter','instagram','linkedin'];
    // MAKE FOOTER TO FUNCTION
}
