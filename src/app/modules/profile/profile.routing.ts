import { Resources } from "../../resources";
import { updateRoutes } from "../../shared/utils/route.utils";

export default updateRoutes([
    {
        path:Resources.Profile,
        loadComponent:() => import('./profile.component').then(c => c.ProfileComponent),
    },
]);