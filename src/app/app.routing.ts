import { Routes } from "@angular/router";
import { LayoutComponent } from "../@core/layout/layout.component";
import { authRouting } from "./modules/auth/auth.routing";
import homeRouting from "./modules/home/home.routing";
import wishlistRouting from "./modules/wishlist/wishlist.routing";
import cartRouting from "./modules/cart/cart.routing";
import categoriesRouting from "./modules/home/components/main/categories/categories.routing";
import searchRouting from "./modules/search/search.routing";
import detailsRouting from "./modules/details/details.routing";
import profileRouting from "./modules/profile/profile.routing";
import contactRouting from "./modules/contact/contact.routing";
import aboutRouting from "./modules/about/about.routing";
import errorRouting from "./modules/error/error.routing";
import { Resources } from "./resources";

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
            ...detailsRouting,
            ...profileRouting,
            ...contactRouting,
            ...aboutRouting,
            ...errorRouting,
        ],
    },
    {
        path:'**',
        redirectTo:Resources.Error,
    }
];
