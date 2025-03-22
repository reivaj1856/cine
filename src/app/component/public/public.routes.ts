import { Routes } from "@angular/router";

export default [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'media',
        loadComponent: () => import('./media/media.component').then(m => m.MediaComponent),
    },
] as Routes;
