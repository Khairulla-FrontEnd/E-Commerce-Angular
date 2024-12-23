import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";

@Component({
    selector:'app-cart',
    standalone:true,
    imports:[
        RouterLink,
        TableModule,
        RatingModule,
        FormsModule,
        ButtonModule
    ],
    templateUrl:'./cart.component.html',
    styleUrl:'./cart.component.scss'
})

export class CartComponent {
    products:any = [
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: '01',
          inventoryStatus: 'INSTOCK',
          rating: 5
      },
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Black Watch',
          description: 'Product Description',
          image: 'black-watch.jpg',
          price: 72,
          category: 'Accessories',
          quantity: '02',
          inventoryStatus: 'INSTOCK',
          rating: 5
      },
      ]
}