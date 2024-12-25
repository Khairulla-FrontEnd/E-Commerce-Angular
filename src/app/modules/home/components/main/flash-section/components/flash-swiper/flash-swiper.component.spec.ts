import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSwiperComponent } from './flash-swiper.component';

describe('FlashSwiperComponent', () => {
  let component: FlashSwiperComponent;
  let fixture: ComponentFixture<FlashSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
