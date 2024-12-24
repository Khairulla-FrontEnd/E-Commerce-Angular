import { Component, inject } from "@angular/core";
import { BaseLoadComponent } from "../../../../../../../shared/components/classes/base-load.component";
import { forkJoin, Observable } from "rxjs";
import { CategoriesService } from "../../categories.service";
import { ActivatedRoute } from "@angular/router";
import { Heading2Component } from "../../../../../../../shared/components/heading2/heading2.component";
import { ProductCardComponent } from "../../../../../../../shared/components/product-card/product-card.component";
import { Skeleton } from "primeng/skeleton";

@Component({
    selector:'app-category',
    standalone:true,
    imports: [
        Heading2Component,
        ProductCardComponent,
        Skeleton,
    ],
    templateUrl:'./category.component.html',
    styleUrl:'./category.component.scss'
})

export class CategoryComponent extends BaseLoadComponent<any> {
    id!:number;
    name:string = '';
    constructor(private route:ActivatedRoute) {
        super();
        this.route.params.subscribe((params) => this.id = params['id'])
     }
    service = inject(CategoriesService);
    getData(): Observable<any> {
        const $category = this.service.getCategoryById(this.id);
        const $products = this.service.getProductsByCategory(this.id);
        return forkJoin([$category,$products]);
    }
    override afterLoadData(data: any): void {
        this.name = data[0].name;
    }
}