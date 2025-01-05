import { Component, inject } from "@angular/core";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { SecondaryButtonComponent } from "../../shared/components/secondary-button/secondary-button.component";
import { Observable } from 'rxjs';
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Heading2Component } from "../../shared/components/heading2/heading2.component";
import { FlashSectionService } from "../home/components/main/flash-section/flash-section.service";
import { ProductCardService } from "../../shared/components/product-card/product-card.service";
import { SkeletonModule } from 'primeng/skeleton';

@Component({
    selector:'app-wishlist',
    standalone:true,
    imports: [
    ProductCardComponent,
    SecondaryButtonComponent,
    Heading2Component,
    SkeletonModule
],
    templateUrl:'./wishlist.component.html',
    styleUrl:'./wishlist.component.scss',
})

export class WishlistComponent extends BaseLoadComponent<any> {
    service = inject(FlashSectionService);
    productService = inject(ProductCardService);
    show:number = 4;
    arrId:number[] = this.productService.arrWishlist;
    getData(): Observable<any> {
        return this.service.getProducts();
    }
    override afterLoadData(data: any): void {
        this.products = data.filter((item:any,index:number) => this.arrId.includes(item.id));
        this.justforyou = data.filter((item:any,index:number) => !this.arrId.includes(item.id));
    }
    products:any[] = [];
    justforyou:any[] = [];
    handleClick():void{
        this.show = this.show === this.justforyou.length ? 4 : this.justforyou.length;
    }
}