import { Component, inject } from "@angular/core";
import { HeadingComponent } from "../../../../../shared/components/heading/heading.component";
import { CategoryCard } from "./components/category-card/category-card.component";
import { BaseLoadComponent } from "../../../../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { CategoriesService } from "./categories.service";
import { ResourceByIdPipe } from "../../../../../shared/pipes/resource-by-id.pipe";
import { Resources } from "../../../../../resources";
import { RouterLink } from "@angular/router";
import { Skeleton } from "primeng/skeleton";

@Component({
    selector:'app-categories',
    imports: [
        HeadingComponent,
        CategoryCard, 
        ResourceByIdPipe,
        RouterLink,
        Skeleton
    ],
    standalone:true,
    templateUrl:'./categories.component.html',
    styleUrl:'./categories.component.scss'
})

export class CategoriesComponent extends BaseLoadComponent<any> {
    service = inject(CategoriesService);
    getData(): Observable<any> {
        return this.service.getCategories();
    }
    override afterLoadData(data: any): void {
        this.data.set(data.filter((item:any,index:number) => item.image !== "https://pravatar.cc/" && item.image !== "https://placeimg.com/640/480/any"))
    }

    protected readonly resources = Resources;
}