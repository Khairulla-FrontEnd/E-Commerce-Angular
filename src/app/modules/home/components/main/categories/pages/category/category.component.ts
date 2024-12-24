import { Component, inject } from "@angular/core";
import { BaseLoadComponent } from "../../../../../../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { CategoriesService } from "../../categories.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-category',
    standalone:true,
    imports:[],
    templateUrl:'./category.component.html',
    styleUrl:'./category.component.scss'
})

export class CategoryComponent extends BaseLoadComponent<any> {
    id!:number;
    constructor(private route:ActivatedRoute) {
        super();
        this.route.params.subscribe((params) => this.id = params['id'])
     }
    service = inject(CategoriesService);
    getData(): Observable<any> {
        return this.service.getProductsByCategory(this.id);
    }
}