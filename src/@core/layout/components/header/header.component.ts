import { Component, HostListener, inject } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { environment } from "../../../../environments/environment";
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { RouterLink } from "@angular/router";
import { LayoutService } from "../../layout.service";
import { Skeleton } from 'primeng/skeleton';
import { CommonModule } from "@angular/common";
import { AutoComplete } from 'primeng/autocomplete';
import { BaseLoadComponent } from "../../../../app/shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { FlashSectionService } from "../../../../app/modules/home/components/main/flash-section/flash-section.service";
import { SearchService } from "../../../../app/modules/search/search.service";
import { ReactiveFormsModule } from "@angular/forms";
import { Resources } from "../../../../app/resources";
import { getResourceById } from "../../../../app/resources";

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
        ReactiveFormsModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent extends BaseLoadComponent<any>{

    ProductService = inject(FlashSectionService);
    SearchService = inject(SearchService);
    should:boolean = true;

    override getData(): Observable<any> {
        return this.ProductService.getProducts();
    }

    handleKey(event:KeyboardEvent):void {
        if(event.key === "Enter" && this.should) {
            this.router.navigate(['/search']);
        }
    }
    handleCardClick(item:any):void {
        // ... SHOULD GO TO CARD'S PAGE
        const id = item.value.id;
        const url = getResourceById(Resources.Detail,id);
        this.router.navigateByUrl(url);
        
        if(item){
            this.should = false;
        }else{
            this.should = true;
        }
    }

    headerLinks:string[] = ['Home','Contact','About','Sign Up']; 
    links:string[] = ['/home','/contact','/about','/signup'];
    filteredCountries:any = [];
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
            label:'Logout',
            icon:'pi pi-sign-out',
        },
    ];
    isShow:boolean = false;
    setActive(index:number) {
        this.active = index;
    }
    override ngOnInit(): void {
        const defaultUserImg = './assets/media/default-image/default-user-img.jpg';
        this.userData = localStorage.getItem('userData');
        this.isLoggedIn = localStorage.getItem('isLoggedIn');
        if(this.isLoggedIn === 'true'){
            this.userData = JSON.parse(this.userData);
            this.imgUrl = this.userData.avatar ? this.userData.avatar : defaultUserImg;
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
            this.router.navigateByUrl(Resources.Signup);
            this.active = 3;
        }else if(i === 0){
            this.router.navigateByUrl(Resources.Profile);
        }
    }
    isShowAccount:boolean = false;
    protected readonly environment = environment;
}
