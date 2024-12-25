import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../../shared/components/heading/heading.component';
import { FlashSwiperComponent } from "./components/flash-swiper/flash-swiper.component";

@Component({
  selector: 'app-flash-section',
  standalone: true,
  imports: [HeadingComponent, FlashSwiperComponent],
  templateUrl: './flash-section.component.html',
  styleUrl: './flash-section.component.scss',
})
export class FlashSectionComponent {
  allBtn: boolean = false;
  AllClickbtn() {
    this.allBtn = !this.allBtn;
  }
}
