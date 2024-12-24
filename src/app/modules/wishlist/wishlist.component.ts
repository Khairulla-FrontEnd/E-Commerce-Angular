import { Component } from "@angular/core";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { SecondaryButtonComponent } from "../../shared/components/secondary-button/secondary-button.component";
import { ApiService } from "../../shared/service/api.service";
import { map } from 'rxjs';

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

export class WishlistComponent {
    constructor(private apiService:ApiService){
        this.apiService.get('products?offset=0&limit=4')
        .pipe(
              map((val:any) => {
              const newVal = val.map((item:any,index:number) => {
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
              return newVal.filter((item:any,index:number) => item !== undefined).splice(0,12);
              })
            )
        .subscribe((val:any) => {
            this.recProducts = val
        });
    } 
    products = new Array(4).fill(
        {
            image:'https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?rs=1&pid=ImgDetMain',
            title:'Coming soon...',
            price:0.00,
            icon:'bi-trash'
        }
    );
    recProducts = [];
}