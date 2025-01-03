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
      this.service.RemoveWishlist(id);
    }
    starbtn.querySelector('i')?.classList.toggle('bi-heart-fill');
  }
  log(event: any, id: number) {
      if (event.target.id !== 'star' && event.target.id !== 'AddCart') {
      const url = getResourceById(Resources.Detail,id); 
      this.router.navigate([url]);
      this.service.sum = this.Sum;
      this.service.value = this.value;
    }
  }

  value: number = Math.floor(Math.random() * 5) + 2;
  foiz: number = Math.floor(Math.random() * 40) + 10;
  real: any;
  yigindi: any;
  Sum: any;
  OldSum: any;
  ngOnInit(): void {
    this.yigindi = Math.round(((this.product.price) / 100) * this.foiz);
    this.real = Math.round(
      (this.product.price - this.yigindi) / 12
    ).toLocaleString();
    this.OldSum = Math.round(this.product.price).toLocaleString();
    this.Sum = Math.round(
      this.product.price - this.yigindi
    ).toLocaleString();
  }
  handleError(img: HTMLImageElement): void {
    img.src = './assets/media/default-image/default-image.jpg';
  }
}
