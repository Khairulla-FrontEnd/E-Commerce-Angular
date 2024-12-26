import { updateRoutes } from "../../shared/utils/route.utils";


export default updateRoutes([
    {
        path:'/search',
        loadComponent:() => import("./search.component").then(c => c.SearchComponent),
    }
])