import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";

@Component({
    selector:'app-wishlist',
    standalone:true,
    imports:[
        ButtonModule,
        ProductCardComponent
    ],
    templateUrl:'./wishlist.component.html',
    styleUrl:'./wishlist.component.scss',
})

export class WishlistComponent { 
    products = new Array(4).fill(
        {
            image:'https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?rs=1&pid=ImgDetMain',
            title:'Coming soon...',
            price:0.00,
            icon:'bi-trash'
        }
    );
}