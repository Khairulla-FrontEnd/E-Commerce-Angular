import { Routes } from "@angular/router";

export function updateRoutes(routes:Routes, path:string = ''):Routes {
    const newRoutes = [...routes];
    newRoutes.forEach(route => {
        if(route.children) {
            route.children = updateRoutes(route.children,route.path as string);
        }
        route.path = route.path?.slice(1);
    })
    return newRoutes;
}