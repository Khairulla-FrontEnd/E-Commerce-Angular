import { Component } from "@angular/core";
import { Select } from 'primeng/select';

@Component({
    selector:'app-hero',
    standalone:true,
    imports:[Select],
    templateUrl:'./hero.component.html',
    styleUrl:'./hero.component.scss',
})

export class HeroComponent {
    lists:any = [
        {
            placeholder:"Woman's Fashion",
            options:[
                {
                    name:'Option1',
                    code:'1',
                },
                {
                    name:'Option2',
                    code:'2',
                },
                {
                    name:'Option3',
                    code:'3',
                },
                {
                    name:'Option4',
                    code:'4',
                },
            ],
        },
        {
            placeholder:"Men's Fashion",
            options:[
                {
                    name:'Option1',
                    code:'1',
                },
                {
                    name:'Option2',
                    code:'2',
                },
                {
                    name:'Option3',
                    code:'3',
                },
                {
                    name:'Option4',
                    code:'4',
                },
            ],
        },
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty",
    ];
}