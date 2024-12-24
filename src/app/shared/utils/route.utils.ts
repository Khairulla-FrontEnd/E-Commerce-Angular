import { Routes } from "@angular/router";

export function updateRoutes(routes:Routes, path:string = ''):Routes {
    const newRoutes = [...routes];
    console.log({
        newRoutes:newRoutes,
        routes:routes
    });
    newRoutes.forEach(route => {
        if(route.children) {
            route.children = updateRoutes(route.children,route.path as string);
        }
        route.path = route.path?.slice(path.length - 1);
    })
    return newRoutes;
}