import { AuthGuard } from "../auth/auth.guard";
import { updateRoutes } from "../../shared/utils/route.utils";
import { Resources } from "../../resources";

export default updateRoutes([
    {
        path:Resources.Home,
        loadComponent:() => import("../home/home.component").then(c => c.HomeComponent),
        canActivate: [AuthGuard],
    }
]);