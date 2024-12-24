import { updateRoutes } from "../../../../../shared/utils/route.utils";
import { Resources } from "../../../../../resources";

export default updateRoutes([
    {
        path:Resources.Category,
        loadComponent:() => import("./pages/category/category.component").then(c => c.CategoryComponent)
    }
])