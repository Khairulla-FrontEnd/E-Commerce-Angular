import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from "@angular/forms";
import { InputComponent } from "../../shared/components/input/input.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { SecondaryButtonComponent } from "../../shared/components/secondary-button/secondary-button.component";
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { FlashSectionService } from "../home/components/main/flash-section/flash-section.service";
import { ProductCardService } from "../../shared/components/product-card/product-card.service";
import { SkeletonModule } from "primeng/skeleton";
import { ProgressSpinnerModule } from "primeng/progressspinner";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    TableModule,
    RatingModule,
    FormsModule,
    InputComponent,
    ButtonComponent,
    SecondaryButtonComponent,
    SkeletonModule,
    ProgressSpinnerModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent extends BaseLoadComponent<any> {

  service = inject(FlashSectionService);
  productService = inject(ProductCardService);

  arrId: number[] = this.productService.arrCart;
  skeletons:number[] = new Array(2).fill(0);

  width: string = '100%';
  products: any[] = [];
  override getData(): Observable<any> {
    return this.service.getProducts();
  }
  override afterLoadData(data: any): void {
    const newData = data.filter((item: any) => this.arrId.includes(item.id));
    this.products = newData;
    this.products.forEach((item: any, index: number) => {
      item.quantity = 0;
      item.total = item.price;
      this.arrId.forEach((id: number, index: number) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
      item.total = item.price * item.quantity;
    });
    this.productService.totalProducts.set(this.products);
  }
  onChange(id:number,value:number):void {
    this.productService.onCartChange(id,value);
    this.products.forEach((item:any) => {
      item.total = item.price * item.quantity;
    })
  }
}