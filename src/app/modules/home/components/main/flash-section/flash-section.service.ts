import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../shared/service/api.service';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlashSectionService {
  
  constructor(private apiService: ApiService) {}
  
  getProducts(params: any = {}): Observable<any> {
    let count = 0;
    return this.apiService.get('/products', params)
    .pipe(
      map((data:any) => {
        const newVal = data.map((item: any, index: number) => {
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
        const newData = newVal.filter(
          (item: any, index: number) => item !== undefined
        );
        return newData;
      })
    )
    ;
  }
  getProductById(productId: number): Observable<any> {
    return this.apiService.get('/products/' + productId)
    .pipe(
      map((data:any) => {
        const newArr = data.images.map((item:string,index:number) => {
          let image = item;
          const newImg = image
            .split('')
            .filter(
              (item: any, index: number) =>
                item !== '"' && item !== '[' && item !== ']'
            )
            .join('');
          image = newImg;
          if (
            image === 'https://placeimg.com/640/480/any' ||
            image === 'www.apple.com'
          ) {
            return;
          }else{
              return image;
          }
      });

      const images = newArr.filter((item:string | undefined,index:number) => item !== undefined);
      data.images = images;
      return data;
      })
    )
    ;
  }
 
}
