import { Component, inject, Input } from "@angular/core";
import { BaseLoadComponent } from "../../../../../../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { CategoriesService } from "../../categories.service";


@Component({
    selector:'app-category',
    standalone:true,
    imports:[],
    templateUrl:'./category.component.html',
    styleUrl:'./category.component.scss'
})

export class CategoryComponent extends BaseLoadComponent<any> {
    @Input() id:number;

    service = inject(CategoriesService);
    getData(): Observable<any> {
        return this.service.getProductsByCategory(id);
    }
}