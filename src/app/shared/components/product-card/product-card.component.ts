import { Component, inject, Input, OnInit } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProductCardService } from './product-card.service';
import { Router } from '@angular/router';
import { getResourceById, Resources } from '../../../resources';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  service = inject(ProductCardService);
  router = inject(Router);

  protected readonly Resources = Resources;

  @Input({required:true}) product: any;
  btn: HTMLElement | undefined;
  starClick(starbtn: HTMLElement, id: number) {
    this.btn = starbtn;
    starbtn.classList.toggle('active');
    if (starbtn.querySelector('i')?.className === 'bi bi-heart') {
      starbtn.querySelector('i')?.classList.remove('bi-heart');
      this.service.AddWishlist(id);
    } else {
      starbtn.querySelector('i')?.classList.add('bi-heart');
      starbtn.querySelector('i')?.classList.add('text-black');
      this.service.RemoveWishlist(id);
    }
    starbtn.querySelector('i')?.classList.toggle('bi-heart-fill');
  }
  log(event: any, id: number) {
      if (event.target.id !== 'star' && event.target.id !== 'AddCart') {
      const url = getResourceById(Resources.Detail,id); 
      this.router.navigate([url]);
      this.service.sum = this.product.sum;
      this.service.value = this.value;
    }
  }

  arrId:number[] = [];
  value: number = Math.floor(Math.random() * 5) + 2;
  
  ngOnInit(): void {
    const arrId = localStorage.getItem('wishlist');
    if(arrId) {
      this.arrId = JSON.parse(arrId);
      if(this.arrId.includes(this.product.id)) this.product.icon = 'bi-heart-fill text-danger';
    }
   
  }
  handleError(img: HTMLImageElement): void {
    img.src = './assets/media/default-image/default-image.jpg';
  }
}
