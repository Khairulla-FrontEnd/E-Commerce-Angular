import { Component, Input } from "@angular/core";


@Component({
    selector:'app-category-card',
    standalone:true,
    imports:[],
    templateUrl:'./category-card.component.html',
    styleUrl:'./category-card.component.scss'
})

export class CategoryCard{
    @Input({required:true}) category:any;
}