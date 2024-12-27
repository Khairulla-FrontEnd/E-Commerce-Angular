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
        this.images = data.images.slice(0,2);
        this.image = data.images.slice(2).join('');
};
}
