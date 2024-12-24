import { HomeComponent } from "./home.component";
import { AuthGuard } from "../auth/auth.guard";
import { updateRoutes } from "../../shared/utils/route.utils";
import { Resources } from "../../resources";
import { Routes } from '@angular/router';

export default updateRoutes([
    {
        path:Resources.Home,
        component:HomeComponent,
        canActivate: [AuthGuard],
    }
]);