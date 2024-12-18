import { Component } from "@angular/core";
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-header',
    standalone:true,
    imports: [ButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
    headerLinks:string[] = ['Home','Contact','About','Sign Up'];   
    active:number = 0;
    setActive(index:number) {
        this.active = index;
    }
}