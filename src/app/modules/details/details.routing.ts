import { Resources } from "../../resources";
import { updateRoutes } from "../../shared/utils/route.utils";


export default updateRoutes([
    {
        path:Resources.Detail,
        loadComponent:() => import('./details.component').then(c => c.DetailsComponent),
    }
])