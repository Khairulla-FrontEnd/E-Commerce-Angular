import { Resources } from "../../resources";
import { updateRoutes } from "../../shared/utils/route.utils";


export default updateRoutes([
    {
        path:Resources.Contact,
        loadComponent:() => import("./contact.component").then(c => c.ContactComponent),
    }
])