import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FlashSectionService } from "../home/components/main/flash-section/flash-section.service";
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { Details } from "./details.interface";
import { RouterLink } from "@angular/router";
import { Image, ImageModule } from 'primeng/image';
import { ProductCardService } from "../../shared/components/product-card/product-card.service";
import { RatingModule } from "primeng/rating";
import { FormsModule } from "@angular/forms";
import { SelectButtonModule } from "primeng/selectbutton";
import { SkeletonModule } from "primeng/skeleton";
import { MobileImgComponent } from './components/mobile-img/mobile-img.component';

@Component({
    selector:'app-details',
    standalone:true,
    imports:[
        RouterLink,
        ImageModule,
        RatingModule,
        FormsModule,
        SelectButtonModule,
        SkeletonModule,
        MobileImgComponent
    ],
    templateUrl:'./details.component.html',
    styleUrl:'./details.component.scss'
})

export class DetailsComponent extends BaseLoadComponent<Details> {
    id!:number;
    service = inject(FlashSectionService);
    productService = inject(ProductCardService);
    title:string = '';
    images:string[] = [];
    image:string = '';
    totalImages:string[] = [];
    description:string = '';
    randomNumber:number = Math.floor(Math.random() * 100) + 25;
    defaultImg:string = './assets/media/default-image/default-image.jpg';
    count:number = 1;
    iconHeart:'heart' | 'heart-fill text-danger' = 'heart';
    stateOptions: any[] = [
        { label:'XS', value:'XS', },
         { label:'S', value:'S' },
         { label:'M', value:'M' },
         { label:'L', value:'L' },
         { label:'XL', value:'XL' },
        ];
    value:string = 'M';
    route = inject(ActivatedRoute);

    override getData(): Observable<Details> {
        return this.service.getProductById(this.id);
    }

    override ngOnInit(): void {
        this.route.params.subscribe((val:any) => this.id = +val.id);
        super.ngOnInit();
    }

    setProperIcon():void{
        this.iconHeart = this.iconHeart === 'heart' ? this.iconHeart = 'heart-fill text-danger' : this.iconHeart = 'heart';
    }

    override afterLoadData(data: Details): void {
        this.title = data.title;
        this.totalImages = data.images;
        this.images = data.images.slice(0,2);
        this.image = data.images.slice(2).join('');
        this.description = data.description;
        if(this.images.length !== 2) {
            this.images = new Array(2).fill(this.defaultImg);
        }
        if(!this.image){
            this.image = this.defaultImg;
        }
    };

    setDefaultImg(img:HTMLImageElement | Image):void{
        img.src = this.defaultImg;
    }
}
