import { Routes } from "@angular/router";
import { SignupComponent } from "../../app/modules/singup/signup.component";
import { LoginComponent } from "../../app/modules/login/login.component";

export const layoutRoutes:Routes = [
    {
        path:'',
        redirectTo:'signup',
        pathMatch:'full'
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
  path:'login',
    component:LoginComponent
    }
];