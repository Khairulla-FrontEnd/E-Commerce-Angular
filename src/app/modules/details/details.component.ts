import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FlashSectionService } from "../home/components/main/flash-section/flash-section.service";
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { Details } from "./details.interface";
import { RouterLink } from "@angular/router";
import { ImageModule } from 'primeng/image';

@Component({
    selector:'app-details',
    standalone:true,
    imports:[
        RouterLink,
        ImageModule
    ],
    templateUrl:'./details.component.html',
    styleUrl:'./details.component.scss'
})

export class DetailsComponent extends BaseLoadComponent<Details> {
    id!:number;
    service = inject(FlashSectionService);
    title:string = '';
    images:string[] = [];
    image:string = '';
    route = inject(ActivatedRoute);

    override getData(): Observable<Details> {
        return this.service.getProductById(this.id);
    }

    override ngOnInit(): void {
        this.route.params.subscribe((val:any) => this.id = +val.id);
        super.ngOnInit();
    }

    override afterLoadData(data: Details): void {
        this.title = data.title;
        console.log(data);
        const newArr = data.images.map((item:string,index:number) => {
            let image = item;
            const newImg = image
              .split('')
              .filter(
                (item: any, index: number) =>
                  item !== '"' && item !== '[' && item !== ']'
              )
              .join('');
            image = newImg;
            if (
              image === 'https://placeimg.com/640/480/any' ||
              image === 'www.apple.com'
            ) {
              return;
            }else{
                return image;
            }
        });

        const images = newArr.filter((item:string | undefined,index:number) => item !== undefined);

        this.images = images.slice(0,2);
        this.image = images.slice(2).join('');
};
}
