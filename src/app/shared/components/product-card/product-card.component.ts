import { Component, Input } from "@angular/core";


@Component({
    selector:'app-product-card',
    standalone:true,
    imports:[],
    templateUrl:'./product-card.component.html',
    styleUrl:'./product-card.component.scss'
})

export class ProductCardComponent {
    @Input({required:true}) product:any; 

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