import { Component, OnInit } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import { ApiService } from '../../../../../../shared/service/api.service';
import { map } from 'rxjs';
import { ProductCardComponent } from '../../../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-flash-section',
  standalone: true,
  imports: [ProductCardComponent],
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
              item.icon = "bi-heart";
              if(newImg === "https://placeimg.com/640/480/any" || newImg === "www.apple.com"){
                return;
              }else{
                return item;
              }
          })
      return newVal.filter((item:any,index:number) => item !== undefined).splice(0,12);
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
}
