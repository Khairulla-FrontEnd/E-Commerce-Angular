import { Component, inject } from "@angular/core";
import { CategoriesComponent } from "../home/components/main/categories/categories.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { FlashSectionService } from "../home/components/main/flash-section/flash-section.service";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { SearchService } from "./search.service";

@Component({
    selector:'app-search',
    standalone:true,
    imports: [
        CategoriesComponent,
        ReactiveFormsModule,
        ProductCardComponent
    ],
    templateUrl:'./search.component.html',
    styleUrl:'./search.component.scss'
})

export class SearchComponent extends BaseLoadComponent<any>{
    service = inject(FlashSectionService);
    SearchService = inject(SearchService);
    filteredData:any;

    override afterLoadData(data: any): void {  
        this.SearchService.filterValue(data);
      }

    getData(): Observable<any> {
        return this.service.getProducts();
    }

}