import { Component, OnInit } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import { ApiService } from '../../../../../../shared/service/api.service';
import { map } from 'rxjs';

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
    this.apiService.get('products')
    .pipe(
      map((val:any) => {
      const newVal = val.map((item:any,index:number) => {
            const image = item.images[0];
              const newImg = image.split("").filter((item:any,index:number) => 
              item !== "\"" 
              && item !== "[" 
              && item !== "]")
              .join("");
              item.images = newImg;
              if(newImg === "https://placeimg.com/640/480/any" || newImg === "www.apple.com"){
                return;
              }else{
                return item;
              }
          })
      return newVal.filter((item:any,index:number) => item !== undefined);
      })
    )
    .subscribe((val: any) => {
      this.products = val;
    });
    var swiper = new Swiper('.mySwiper', {
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
