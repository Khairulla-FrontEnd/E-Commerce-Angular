import { Resources } from "../../resources";
import { updateRoutes } from "../../shared/utils/route.utils";

export default updateRoutes([
    {
        path:Resources.Cart,
        loadComponent: () => import("./cart.component").then(c => c.CartComponent),
    },
]);