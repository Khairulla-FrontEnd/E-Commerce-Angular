import { Component, inject } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../../../../shared/components/product-card/product-card.component';
import { HeadingComponent } from "../../../../../shared/components/heading/heading.component";
import { BaseLoadComponent } from '../../../../../shared/components/classes/base-load.component';
import { FlashSectionService } from './flash-section.service';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-flash-section',
  standalone: true,
  imports: [ProductCardComponent, HeadingComponent, Skeleton],
  templateUrl: './flash-section.component.html',
  styleUrl: './flash-section.component.scss',
})
export class FlashSectionComponent extends BaseLoadComponent<any> {
  service = inject(FlashSectionService);
  isActive: number = -1;

  override afterLoadData(data: any): void {
    var swiper = new Swiper('.mySwiper', {
      cssMode: true,
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      navigation: {
        nextEl: '.right',
        prevEl: '.left',
      },
      modules: [Navigation, Pagination],
    });
    const newVal = data.map((item: any, index: number) => {
      const image = item.images[0];
      const newImg = image.split("")
        .filter
        (
          (item: any, index: number) =>
            item !== "\""
            && item !== "["
            && item !== "]"
        )
        .join("");
      item.images = newImg;
      item.icon = "bi-heart";
      if
        (
        newImg === "https://placeimg.com/640/480/any"
        ||
        newImg === "www.apple.com"
      ) {
        return;
      } else {
        return item;
      }
    })
    const newData = newVal.filter((item: any, index: number) => item !== undefined); 
    this.data.set(newData);
  }

  getData(): Observable<any> {
    return this.service.getProducts()
  }
}
