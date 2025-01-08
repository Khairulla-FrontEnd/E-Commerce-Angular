import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  sum:string = (Math.floor(Math.random() * 58) + 18).toLocaleString();
  value:number = Math.floor(Math.random() * 5) + 2;
  arrWishlist:number[] = this.giveWishlistData() ? this.giveWishlistData() : [];
  arrCart:number[] = this.giveCartData() ? this.giveCartData() : [];
  uniqueCart:number[] = this.giveUniqueCart() ? this.giveUniqueCart() : [];

  giveCartData():number[] {
    const arrCart = localStorage.getItem('cart');
    const cartId:number[] = [];
    if(arrCart){
      const parsedData:number[] = JSON.parse(arrCart);
      cartId.push(...parsedData);
    }
    return cartId;
  }

  giveUniqueCart():number[] {
    const arrCart = localStorage.getItem('cart');
    const cartId:number[] = [];
    if(arrCart){
      const parsedData:number[] = JSON.parse(arrCart);
      const arrSet = new Set(parsedData);
      const uniqueArr = Array.from(arrSet);
      cartId.push(...uniqueArr);
    }
    return cartId;
  }

  AddCart(id: number): number {
    this.arrCart.push(id);
    localStorage.setItem('cart',JSON.stringify(this.arrCart));
    this.uniqueCart = this.giveUniqueCart();
    return id;
  }

  onCartChange(id:number,quantity:number):void {
    const productId:number[] = this.arrCart.filter((item:number) => item === id);
    const otherProducts:number[] = this.arrCart.filter((item:number) => item !== id);
    if(quantity > productId.length){
      productId.push(id);
    }else if(quantity < productId.length){
      productId.pop();
    }
    this.arrCart = productId.concat(otherProducts);
    localStorage.setItem('cart',JSON.stringify(this.arrCart));
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
