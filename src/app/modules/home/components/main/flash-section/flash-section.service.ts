import { Injectable } from "@angular/core";
import { ApiService } from "../../../../../shared/service/api.service";
import { Observable, map } from "rxjs";


@Injectable({ providedIn:'root' })

export class FlashSectionService {
    constructor(private apiService:ApiService) { }

    getProducts(params:any = {}):Observable<any> {
        return this.apiService.get('/products',params)
        .pipe(
            map((val:any) => {
            const newVal = val.map((item:any,index:number) => {
                  const image = item.images[0];
                    const newImg = image.split("")
                    .filter
                (
                    (item:any,index:number) => 
                    item !== "\"" 
                    && item !== "[" 
                    && item !== "]"
                )
                    .join("");
                    item.images = newImg;
                    item.icon = "bi-heart";
                    if
                    (
                        newImg === "https://placeimg.com/640/480/any" 
                        || 
                        newImg === "www.apple.com"
                    ){
                      return;
                    }else{
                      return item;
                    }
                })
            return newVal.filter((item:any,index:number) => item !== undefined).splice(0,12);
            })
          );
    }
    getProductById(productId:number): Observable<any> {
        return this.apiService.get('/products/' + productId);
    }

}