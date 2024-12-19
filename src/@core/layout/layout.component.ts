import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/content/content.component";


@Component({
    selector: 'app-layout',
    standalone:true,
    imports: [HeaderComponent, ContentComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})

export class LayoutComponent {
    
}