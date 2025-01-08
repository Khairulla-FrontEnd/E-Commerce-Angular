import { Injectable } from "@angular/core";
import { ApiService } from "../../../../../shared/service/api.service";
import { map, Observable } from "rxjs";


@Injectable({ providedIn:"root" })
// MAKE BASE LOAD COMPONENT LIKE GRANTFRONTEND

export class CategoriesService{

    constructor(private apiService:ApiService){ }

    getCategories(params: any = {}):Observable<any>{
        return this.apiService.get('categories',params);
    }
    getProductsByCategory(categoryId:number):Observable<any>{
        let count = 0;
        return this.apiService.get('categories/' + categoryId + '/products')
        .pipe(
            map(val => {
                const newVal = val.map((item:any,index:number) => {
                    count += 2;
                    if(count === 20) {
                      count = 0;
                    }
                   let foiz: number = 10 + (count);
           let real: any;
           let yigindi: any;
           let Sum: any;
           let OldSum: any;
           yigindi = Math.round(((item.price) / 100) * foiz);
           real = Math.round(
             (item.price - yigindi) / 12
           ).toLocaleString();
           OldSum = Math.round(item.price).toLocaleString();
           Sum = Math.round(
             item.price - yigindi
           ).toLocaleString();
           item.sum = Sum;
           item.foiz =foiz
           item.real = real;
           item.oldSum = OldSum;
           const image = item.images[0];
          const newImg = image
            .split('')
            .filter(
              (item: any, index: number) =>
                item !== '"' && item !== '[' && item !== ']'
            )
            .join('');
          item.images = newImg;
          item.icon = 'bi-heart';
          if (
            newImg === 'https://placeimg.com/640/480/any' ||
            newImg === 'www.apple.com'
          ) {
            return;
          } else {
            return item;
          }
                });
                return newVal.filter((item:any | undefined,index:number) => item !== undefined);
            })
        )
        ;
    }
    getCategoryById(id:number):Observable<any>{
        return this.apiService.get('categories/' + id);
    }
}