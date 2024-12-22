import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";


@Component({
    selector: 'app-layout',
    standalone:true,
    imports: [HeaderComponent, ContentComponent, FooterComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})

export class LayoutComponent {
    
}