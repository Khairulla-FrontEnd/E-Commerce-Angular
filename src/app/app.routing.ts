import { Routes } from "@angular/router";
import { LayoutComponent } from "../@core/layout/layout.component";
import { authRouting } from "./modules/auth/auth.routing";
import homeRouting from "./modules/home/home.routing";

export const appRouting: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            ...authRouting,
            ...homeRouting
        ],
    }
];
