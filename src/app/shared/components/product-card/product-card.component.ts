import { Component, input, Input, OnInit } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RatingModule, FormsModule, Skeleton],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() isLoading: boolean = true;
  @Input() product: any;
  btn: HTMLElement | undefined;
  starClick(starbtn: HTMLElement) {
    this.btn = starbtn;
    starbtn.classList.toggle('active');
    if (starbtn.querySelector('i')?.className === 'bi bi-heart') {
      starbtn.querySelector('i')?.classList.remove('bi-heart');
    } else {
      starbtn.querySelector('i')?.classList.add('bi-heart');
    }
    starbtn.querySelector('i')?.classList.toggle('bi-heart-fill');
  }
  log(event: any, val: boolean) {
    if (!event.target.className.includes('bi')) {
    }
  }

  value: number = Math.floor(Math.random() * 5) + 2;
  foiz: number = Math.floor(Math.random() * 40) + 10;
  real: any;
  yigindi: any;
  ngOnInit(): void {
    this.real = Math.floor((this.product.price * 13000) / 12).toLocaleString();
    this.yigindi = Math.floor(((this.product.price * 13000) / 100) * this.foiz);
  }

  heandleLoad(): void {}
}
