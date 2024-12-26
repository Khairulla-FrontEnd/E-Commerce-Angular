import { Component, HostListener, inject } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { environment } from "../../../../environments/environment";
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Router, RouterLink } from "@angular/router";
import { LayoutService } from "../../layout.service";
import { Skeleton } from 'primeng/skeleton';
import { CommonModule } from "@angular/common";
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from "@angular/forms";
import { BaseLoadComponent } from "../../../../app/shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { FlashSectionService } from "../../../../app/modules/home/components/main/flash-section/flash-section.service";

@Component({
    selector: 'app-header',
    standalone:true,
    imports: [
        ButtonModule,
        BadgeModule,
        OverlayBadgeModule,
        Skeleton,
        CommonModule,
        RouterLink,
        AutoComplete,
        FormsModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent extends BaseLoadComponent<any>{

    ProductService = inject(FlashSectionService)
    override router = inject(Router);

    override getData(): Observable<any> {
        return this.ProductService.getProducts();
    }

    override afterLoadData(data: any): void {

    const newVal = data.map((item: any, index: number) => {
      const image = item.images[0];
      const newImg = image
        .split('')
        .filter(
          (item: any, index: number) =>
            item !== '"' && item !== '[' && item !== ']'
        )
        .join('');
      item.images = newImg;
      item.icon = 'bi-heart';
      if (
        newImg === 'https://placeimg.com/640/480/any' ||
        newImg === 'www.apple.com'
      ) {
        return;
      } else {
        return item;
      }
    });
    const newData = newVal.filter(
      (item: any, index: number) => item !== undefined
    );
    this.data.set(newData);
  }

    headerLinks:string[] = ['Home','Contact','About','Sign Up']; 
    filteredCountries:any = [];
    selectedCountry:any;
    active:number = 0;
    userData:any;
    isLoading2:boolean = true;
    isLoggedIn:any;
    service = inject(LayoutService);
    setLoad():void{
        this.isLoading2 = false;
    }
    handleError(img:HTMLImageElement):void {
        img.src = './assets/media/default-image/default-image.jpg';
    }
    filterCountry(event:any):void{
        let query = event.query;
        let filtered = [];

        for (let i = 0; i < (this.data() as any[]).length; i++) {
            let product = (this.data() as any[])[i];
            if(product.title.toLowerCase().includes(query)) {
                filtered.push(product);
            }
        }
        this.filteredCountries = filtered;
    }
    imgUrl:string = '';
    items = [
        {
            label:'Manage My Account',
            icon:'pi pi-user',
        },
        {
            label:'My Order',
            icon:'pi pi-inbox',
        },
        {
            label:'My Cancellations',
            icon:'pi pi-times-circle',
        },
        {
            label:'My Reviews',
            icon:'pi pi-star',
        },
        {
            label:'Logout',
            icon:'pi pi-sign-out',
        },
    ];
    isShow:boolean = false;
    setActive(index:number) {
        this.active = index;
    }
    override ngOnInit(): void {
        this.userData = localStorage.getItem('userData');
        this.isLoggedIn = localStorage.getItem('isLoggedIn');
        if(this.isLoggedIn === 'true'){
            this.userData = JSON.parse(this.userData);
            this.imgUrl = this.userData.avatar;
            this.service.isShowAccount.set(true);
        }else{
            this.service.isShowAccount.set(false);
        }
        super.ngOnInit();
    }
    @HostListener('window:click',['$event'])
    onClick(event:any):void {
        if(event.target.id !== 'avatar'){
        this.isShow = false;
        }
    }
    showAvatar(i:number):void{
        this.isShow = !this.isShow;
        if(i === this.items.length - 1){
            localStorage.removeItem('isLoggedIn');
            this.router.navigate(['/signup']);
        }
    }
    isShowAccount:boolean = false;
    protected readonly environment = environment;
}
