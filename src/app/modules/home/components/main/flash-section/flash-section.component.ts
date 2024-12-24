import { Component, inject, OnInit } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import { ApiService } from '../../../../../shared/service/api.service';
import { map, Observable } from 'rxjs';
import { ProductCardComponent } from '../../../../../shared/components/product-card/product-card.component';
import { HeadingComponent } from "../../../../../shared/components/heading/heading.component";
import { BaseLoadComponent } from '../../../../../shared/components/classes/base-load.component';
import { FlashSectionService } from './flash-section.service';

@Component({
  selector: 'app-flash-section',
  standalone: true,
  imports: [ProductCardComponent, HeadingComponent],
  templateUrl: './flash-section.component.html',
  styleUrl: './flash-section.component.scss',
})
export class FlashSectionComponent extends BaseLoadComponent<any> implements OnInit {
  isActive: number = -1;
  swiper:any;
  constructor() {
    super();
    this.swiper = new Swiper('.mySwiper', {
      slidesPerView: 4.5,
      spaceBetween: 30,
      freeMode: true,
      navigation: {
        nextEl: '.right',
        prevEl: '.left',
      },
      modules: [Navigation, Pagination],
    });
  }
  service = inject(FlashSectionService);
  getData(): Observable<any> {
    return this.service.getProducts()
  }
}
