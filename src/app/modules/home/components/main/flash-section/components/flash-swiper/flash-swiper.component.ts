import { Component, inject, Input } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';
import { ProductCardComponent } from '../../../../../../../shared/components/product-card/product-card.component';
import { BaseLoadComponent } from '../../../../../../../shared/components/classes/base-load.component';
import { Observable } from 'rxjs';
import { FlashSectionService } from '../../flash-section.service';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SearchService } from '../../../../../../search/search.service';
@Component({
  selector: 'app-flash-swiper',
  standalone: true,
  imports: [Skeleton, ProductCardComponent],
  templateUrl: './flash-swiper.component.html',
  styleUrl: './flash-swiper.component.scss',
})
export class FlashSwiperComponent extends BaseLoadComponent<any> {
  service = inject(FlashSectionService);
  SearchService = inject(SearchService);
  isActive: number = -1;

  @Input({required:true}) startLength:number = 0;
  @Input({required:true}) endLength:number | boolean = 0;
  @Input() showBtn:boolean = true;
  @Input({required:true}) id:number = 0;
  override afterLoadData(data: any): void {
    var swiper = new Swiper('.mySwiper'.concat(String(this.id)), {
      cssMode: true,
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      navigation: {
        nextEl: '.right'.concat(String(this.id)),
        prevEl: '.left'.concat(String(this.id)),
      },
      modules: [Navigation, Pagination],
    });
    this.SearchService.filterValue(this.data());
  }

  getData(): Observable<any> {
    return this.service.getProducts();
  }
}
