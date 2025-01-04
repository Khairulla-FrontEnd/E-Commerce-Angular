import { Component, inject } from "@angular/core";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { SecondaryButtonComponent } from "../../shared/components/secondary-button/secondary-button.component";
import { forkJoin, map, Observable } from 'rxjs';
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Heading2Component } from "../../shared/components/heading2/heading2.component";
import { FlashSectionService } from "../home/components/main/flash-section/flash-section.service";
import { ProductCardService } from "../../shared/components/product-card/product-card.service";

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
    productService = inject(ProductCardService);
    show:number = 4;
    arrId:number[] = this.productService.arrWishlist;
    getData(): Observable<any> {
        const $productData = this.arrId.map((item:number,index:number) => this.service.getProductById(item));
        const $recommendData = this.service.getProducts();
        return forkJoin([$productData,$recommendData]);
    }

    override afterLoadData(data: any): void {
        console.log(data);
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