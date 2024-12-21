import { Component } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { FlashSectionComponent } from "./components/hero/main/flash-section/flash-section.component";

@Component({
    selector:'app-home',
    standalone:true,
    imports: [
    HeroComponent,
    FlashSectionComponent
],
    templateUrl:'./home.component.html',
    styleUrl:'./home.component.scss'
})

export class HomeComponent {
    
}