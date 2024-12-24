import { Component, inject } from "@angular/core";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { SecondaryButtonComponent } from "../../shared/components/secondary-button/secondary-button.component";
import { map, Observable } from 'rxjs';
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { WishlistService } from "./wishlist.service";

@Component({
    selector:'app-wishlist',
    standalone:true,
    imports: [
    ProductCardComponent,
    SecondaryButtonComponent
],
    templateUrl:'./wishlist.component.html',
    styleUrl:'./wishlist.component.scss',
})

export class WishlistComponent extends BaseLoadComponent<any>{
    service = inject(WishlistService);
    show:number = 4;

    getData(): Observable<any> {
        return this.service.getRecommendedProducts();
    }

    override afterLoadData(data: any): void {
        const newVal = data.map((item:any,index:number) => {
            const image = item.images[0];
              const newImg = image.split("").filter((item:any,index:number) => 
              item !== "\"" 
              && item !== "[" 
              && item !== "]")
              .join("");
              item.images = newImg;
              item.icon = "bi-heart";
              if(newImg === "https://placeimg.com/640/480/any" || newImg === "www.apple.com"){
                return;
              }else{
                return item;
              }
          })
      this.data.set(newVal.filter((item:any,index:number) => item !== undefined));
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