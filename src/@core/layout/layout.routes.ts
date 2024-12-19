import { Routes } from "@angular/router";
import { LoginComponent } from "../../app/modules/login/login.component";


export const layoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch:'full'
    },
    {
        path: 'login',
        component:LoginComponent
    }
]