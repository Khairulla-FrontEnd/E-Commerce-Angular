import { Routes } from "@angular/router";
import { LayoutComponent } from "../@core/layout/layout.component";
import { authRouting } from "./modules/auth/auth.routing";
import homeRouting from "./modules/home/home.routing";
import wishlistRouting from "./modules/wishlist/wishlist.routing";
import cartRouting from "./modules/cart/cart.routing";

export const appRouting: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            ...authRouting,
            ...homeRouting,
            ...wishlistRouting,
            ...cartRouting
        ],
    }
];
