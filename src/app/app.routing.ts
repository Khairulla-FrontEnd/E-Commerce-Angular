import { Routes } from "@angular/router";
import { LayoutComponent } from "../@core/layout/layout.component";
import { authRouting } from "./modules/auth/auth.routing";
import homeRouting from "./modules/home/home.routing";
import wishlistRouting from "./modules/wishlist/wishlist.routing";
import cartRouting from "./modules/cart/cart.routing";
import categoriesRouting from "./modules/home/components/main/categories/categories.routing";
import searchRouting from "./modules/search/search.routing";
import detailsRouting from "./modules/details/details.routing";

export const appRouting: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            ...authRouting,
            ...homeRouting,
            ...wishlistRouting,
            ...cartRouting,
            ...categoriesRouting,
            ...searchRouting,
            ...detailsRouting
        ],
    }
];
