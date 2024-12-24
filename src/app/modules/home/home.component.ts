import { Component } from "@angular/core";
import { HeroComponent } from "./components/main/hero/hero.component";
import { FlashSectionComponent } from "./components/main/flash-section/flash-section.component";
import { CategoriesComponent } from "./components/main/categories/categories.component";

@Component({
    selector:'app-home',
    standalone:true,
    imports: [
    HeroComponent,
    FlashSectionComponent,
    CategoriesComponent
],
    templateUrl:'./home.component.html',
    styleUrl:'./home.component.scss'
})

export class HomeComponent {
    
}