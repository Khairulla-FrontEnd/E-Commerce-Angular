import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {

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
