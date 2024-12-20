import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "../singup/auth.guard";

export const homeRoutes:Routes = [
    {
        path:'home',
        component:HomeComponent,
        canActivate: [AuthGuard],
    }
];