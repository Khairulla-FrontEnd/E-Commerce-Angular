import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../shared/service/api.service';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlashSectionService {
  constructor(private apiService: ApiService) {}

  getProducts(params: any = {}): Observable<any> {
    return this.apiService.get('/products', params)
    .pipe(
      map((data:any) => {
        const newVal = data.map((item: any, index: number) => {
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
