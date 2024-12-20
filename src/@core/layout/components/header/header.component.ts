import { Component, inject, OnInit } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { environment } from "../../../../environments/environment";
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Router } from "@angular/router";
import { LayoutService } from "../../layout.service";

@Component({
    selector: 'app-header',
    standalone:true,
    imports: [
        ButtonModule,
        BadgeModule,
        OverlayBadgeModule
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
    constructor(private router:Router) { }
    headerLinks:string[] = ['Home','Contact','About','Sign Up'];   
    active:number = 0;
    userData:any;
    service = inject(LayoutService);
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
    ngOnInit(): void {
        this.userData = localStorage.getItem('userData');
        if(this.userData){
            this.service.isShowAccount = true;
            this.userData = JSON.parse(this.userData);
            this.imgUrl = this.userData.avatar;
        }
    }
    showAvatar(i:number):void{
        this.isShow = !this.isShow;
        if(i === this.items.length - 1){
            this.router.navigate(['/signup']);
            localStorage.removeItem('userData');
        }
    }
    isShowAccount:boolean = false;
    protected readonly environment = environment;
}