import { Component, inject } from "@angular/core";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { SecondaryButtonComponent } from "../../shared/components/secondary-button/secondary-button.component";
import { Observable } from 'rxjs';
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Heading2Component } from "../../shared/components/heading2/heading2.component";
import { FlashSectionService } from "../home/components/main/flash-section/flash-section.service";

@Component({
    selector:'app-wishlist',
    standalone:true,
    imports: [
    ProductCardComponent,
    SecondaryButtonComponent,
    Heading2Component
],
    templateUrl:'./wishlist.component.html',
    styleUrl:'./wishlist.component.scss',
})

export class WishlistComponent extends BaseLoadComponent<any>{
    service = inject(FlashSectionService);
    show:number = 4;

    getData(): Observable<any> {
        return this.service.getProducts();
    }
    products = new Array(4).fill(
        {
            image:'https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?rs=1&pid=ImgDetMain',
            title:'Coming soon...',
            price:0.00,
            icon:'bi-trash'
        }
    );
    handleClick():void{
        this.show = this.show === this.data().length ? 4 : this.data().length;
    }
}