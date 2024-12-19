import { Routes } from '@angular/router';
import { LayoutComponent } from '../@core/layout/layout.component';
import { layoutRoutes } from '../@core/layout/layout.routes';

export const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            ...layoutRoutes
        ]
    }
];
