import { Component, OnInit } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import { ApiService } from '../../../../../../shared/service/api.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-flash-section',
  standalone: true,
  imports: [],
  templateUrl: './flash-section.component.html',
  styleUrl: './flash-section.component.scss',
})
export class FlashSectionComponent implements OnInit {
  isActive: number = -1;
  constructor(private apiService: ApiService) {}
  products: any = [];
  ngOnInit(): void {
    this.apiService.get('products').subscribe((val: any) => {
      console.log(val);
      this.products = val;
    });
    var swiper = new Swiper('.swiper', {
      slidesPerView: 4.5,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.right',
        prevEl: '.left',
      },
      modules: [Navigation, Pagination],
    });
  }

  starClick(starbtn: HTMLElement) {
    starbtn.classList.toggle('active');
    if (starbtn.querySelector('i')?.className === 'bi bi-heart') {
      starbtn.querySelector('i')?.classList.remove('bi-heart');
    } else {
      starbtn.querySelector('i')?.classList.add('bi-heart');
    }
    starbtn.querySelector('i')?.classList.toggle('bi-heart-fill');
  }
}
