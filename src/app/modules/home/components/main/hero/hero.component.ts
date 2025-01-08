import { Component, OnInit } from "@angular/core";
import { Pagination, Navigation } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import { NgOptimizedImage } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector:'app-hero',
    standalone:true,
    imports:[
        NgOptimizedImage,
        ButtonModule,
        RouterLink
    ],
    templateUrl:'./hero.component.html',
    styleUrl:'./hero.component.scss',
})

export class HeroComponent implements OnInit{
    constructor(private router:Router) { }
    ngOnInit(): void {
        var swiper = new Swiper('.mySwiper2',{
            loop:true,
            pagination: {
                el: ".swiper-pagination",
                clickable:true
              },
            modules:[Pagination, Navigation],
            autoplay:true,
        })
    }
    reloadPage():void{
        this.router.navigateByUrl('/search');
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