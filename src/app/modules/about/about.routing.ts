import { Resources } from "../../resources";
import { updateRoutes } from "../../shared/utils/route.utils";


export default updateRoutes([
    {
        path:Resources.About,
        loadComponent:() => import('./about.component').then(c => c.AboutComponent),
    }
])