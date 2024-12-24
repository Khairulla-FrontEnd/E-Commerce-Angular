import { Component, Input } from "@angular/core";


@Component({
    selector:'app-heading2',
    standalone:true,
    imports:[],
    templateUrl:'./heading2.component.html',
    styleUrl:'./heading2.component.scss'
})

export class Heading2Component {
    @Input({required:true}) label:string = '';
}