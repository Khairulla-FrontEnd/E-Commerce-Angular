import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  sum:string = (Math.floor(Math.random() * 58) + 18).toLocaleString();
  value:number = Math.floor(Math.random() * 5) + 2;

  AddCart(id: number): number {
    return id;
  }

  AddWishlist(id: number): number {
    return id;
  }

  RemoveWishlist(id: number): number {
    return id;
  }
}
