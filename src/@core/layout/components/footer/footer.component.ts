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
            list:["111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.","exclusive@gmail.com","+88015-88888-9999"],
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