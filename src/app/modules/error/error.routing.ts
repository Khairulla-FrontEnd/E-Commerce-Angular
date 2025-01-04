import { Resources } from "../../resources";
import { updateRoutes } from "../../shared/utils/route.utils";


export default updateRoutes([
    {
        path:Resources.Error,
        loadComponent:() => import('./error.component').then(c => c.ErrorComponent)
    }
]);
