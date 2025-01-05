import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  sum:string = (Math.floor(Math.random() * 58) + 18).toLocaleString();
  value:number = Math.floor(Math.random() * 5) + 2;
  arrWishlist:number[] = this.giveWishlistData() ? this.giveWishlistData() : [];

  AddCart(id: number): number {
    return id;
  }

  giveWishlistData():number[]{
    const arrWishlist = localStorage.getItem('wishlist');
    const wishlistId:number[] = [];
    if(arrWishlist){
      const parsedData:number[] = JSON.parse(arrWishlist);
      wishlistId.push(...parsedData);
    }
    return wishlistId;
  }

  AddWishlist(id: number): number {
    this.arrWishlist.push(id);
    const arrSet = new Set(this.arrWishlist);
    this.arrWishlist = Array.from(arrSet);
    localStorage.setItem('wishlist',JSON.stringify(this.arrWishlist));
    return id;
  }

  RemoveWishlist(id: number): number {
    this.arrWishlist = this.arrWishlist.filter((item:number,index:number) => item !== id);
    localStorage.setItem('wishlist',JSON.stringify(this.arrWishlist));
    return id;
  }
}
