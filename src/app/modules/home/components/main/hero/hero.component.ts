import { Component, OnInit } from "@angular/core";
import { Pagination, Navigation } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector:'app-hero',
    standalone:true,
    imports:[NgOptimizedImage],
    templateUrl:'./hero.component.html',
    styleUrl:'./hero.component.scss',
})

export class HeroComponent implements OnInit{
    ngOnInit(): void {
        var swiper = new Swiper('.mySwiper2',{
            pagination: {
                el: ".swiper-pagination",
                clickable:true
              },
            modules:[Pagination, Navigation],
            autoplay:true
        })
    }
    lists:any = [
        {
            placeholder:"Woman's Fashion",
            options:[
                {
                    name:'Option1',
                    code:'1',
                },
                {
                    name:'Option2',
                    code:'2',
                },
                {
                    name:'Option3',
                    code:'3',
                },
                {
                    name:'Option4',
                    code:'4',
                },
            ],
        },
        {
            placeholder:"Men's Fashion",
            options:[
                {
                    name:'Option1',
                    code:'1',
                },
                {
                    name:'Option2',
                    code:'2',
                },
                {
                    name:'Option3',
                    code:'3',
                },
                {
                    name:'Option4',
                    code:'4',
                },
            ],
        },
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty",
    ];
}