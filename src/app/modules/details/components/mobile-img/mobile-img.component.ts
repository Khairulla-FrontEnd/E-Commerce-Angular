import { Component, Input, OnInit } from "@angular/core";
import Swiper from "swiper/bundle";
import { Navigation, Pagination } from 'swiper/modules';

@Component({
    selector:'app-mobile-img',
    standalone:true,
    imports:[],
    templateUrl:'./mobile-img.component.html',
    styleUrl:'./mobile-img.component.scss'
})

export class MobileImgComponent implements OnInit {
    @Input() totalImages:string[] = [];
    
    ngOnInit(): void {
        var swiper2 = new Swiper('.mySwiper33',{
            pagination: {
                el:'.swiper-pagination',
                clickable:true
            },
            modules:[Navigation, Pagination],
        });
    }
}