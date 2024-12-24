import { Routes } from "@angular/router";
import { SignupComponent } from "./singup/signup.component";
import { LoginComponent } from "./login/login.component";
import { Resources } from "../../resources";

export const authRouting: Routes = [
    {
        path:'',
        redirectTo:'signup',
        pathMatch:'full'
    },
    {
    path:'signup',
    component:SignupComponent,
},
{
    path:'login',
    component:LoginComponent,
},
]