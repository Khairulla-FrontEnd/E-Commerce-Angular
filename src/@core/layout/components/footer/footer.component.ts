import { Component } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { NgOptimizedImage } from "@angular/common";


@Component({
    selector:'app-footer',
    standalone:true,
    imports:[
        NgOptimizedImage
    ],
    templateUrl:'./footer.component.html',
    styleUrl:'./footer.component.scss'
})

export class FooterComponent {
    protected readonly environment = environment;

    lists:any = [
        {
            title:"Support",
            list:["Urganch, Khorazm region, Uzbekistan.","khairulla2008@outlook.com","+998-97-858-6000"],
        },
        {
            title:"Account",
            list:["My Account","Login / Register","Card","Wishlist","Shop"],
        },
        {
            title:"Quick Link",
            list:["Privacy Policy","Terms Of Use","FAQ","Contact"],
        }
    ];
    icons:string[] = ['facebook','twitter','instagram','linkedin'];
}