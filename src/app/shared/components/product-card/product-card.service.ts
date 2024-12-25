import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  showCart(id: number): number {
    return id;
  }

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
