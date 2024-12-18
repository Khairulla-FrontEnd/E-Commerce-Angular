import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector:'app-content',
    standalone:true,
    imports:[RouterOutlet],
    templateUrl:'./content.component.html',
    styleUrl:'./content.component.scss'
})

export class ContentComponent{

}