import { updateRoutes } from "../../shared/utils/route.utils";
import { Resources } from "../../resources";

export default updateRoutes([
    {
        path:Resources.Wishlist,
        loadComponent:() => import("./wishlist.component").then(c => c.WishlistComponent),
    },
])