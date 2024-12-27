import { Component, inject } from "@angular/core";
import { CategoriesComponent } from "../home/components/main/categories/categories.component";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
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
        const newVal = data.map((item: any, index: number) => {
          const image = item.images[0];
          const newImg = image
            .split('')
            .filter(
              (item: any, index: number) =>
                item !== '"' && item !== '[' && item !== ']'
            )
            .join('');
          item.images = newImg;
          item.icon = 'bi-heart';
          if (
            newImg === 'https://placeimg.com/640/480/any' ||
            newImg === 'www.apple.com'
          ) {
            return;
          } else {
            return item;
          }
        });
        const newData = newVal.filter(
          (item: any, index: number) => item !== undefined
        );
        this.data.set(newData);
        this.SearchService.filterValue(this.data());
      }

    getData(): Observable<any> {
        return this.service.getProducts();
    }

}