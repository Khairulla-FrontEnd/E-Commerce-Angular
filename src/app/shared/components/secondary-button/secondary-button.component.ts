import { Component, Input } from "@angular/core";
import { ButtonModule } from 'primeng/button';

@Component({
    selector:'app-secondary-button',
    standalone:true,
    imports:[
        ButtonModule
    ],
    template:`
    <p-button
            severity="secondary"
            [label]="label"
            [style]="{color:'black', border:'2px solid black', background:'white'}"
            />
    `
})

export class SecondaryButtonComponent{
    @Input() label:string = '';
}