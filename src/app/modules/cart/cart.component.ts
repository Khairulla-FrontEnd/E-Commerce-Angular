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
import { getResourceById, Resources } from "../../resources";
import { ToastModule } from 'primeng/toast';
import { MessageService } from "primeng/api";

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
    ProgressSpinnerModule,
    RouterLink,
    ToastModule
  ],
  providers:[
    MessageService
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent extends BaseLoadComponent<any> {

  service = inject(FlashSectionService);
  productService = inject(ProductCardService);
  messageService = inject(MessageService);
  total:number = 0;

  arrId: number[] = this.productService.arrCart;

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
      item.total = item.sum;
      this.arrId.forEach((id: number, index: number) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
      item.total = item.sum * item.quantity;
      this.total += item.total;
    });
  }
  show():void {
    this.messageService.add({ severity:'success',summary:'Success',detail:'Your order has been shipped and is on its way!',life:3000 });
    this.products = [];
    this.arrId = [];
    this.productService.arrCart = [];
    this.productService.uniqueCart = [];
    localStorage.removeItem('cart');
  }

  navigate(id:number, event:any):void {
    if(event.target.id !== 'input'){
      const url = getResourceById(Resources.Detail,id.toString());
      this.router.navigateByUrl(url);
    }
  }

  onChange(id:number,value:number, input:HTMLInputElement):void {
    if(value >= 0){
      let sum = 0;
      this.products.forEach((item:any) => {
        item.total = item.sum * item.quantity;
        sum += item.sum * item.quantity;
      });
      this.total = sum;
      this.productService.onCartChange(id,value);
    }
  }

  protected readonly resources = Resources;

}