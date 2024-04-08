import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',
        loadComponent:()=>import('./pages/login/login.component').then((m)=>m.LoginComponent)
    },
    {
        path:'register',
        loadComponent:()=>import('./pages/register/register.component').then((m)=>m.RegisterComponent)
    },
    {
        path: 'admin',
         loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.routes').then((m) => m.AdminDashboardRoutes ),
    },
  {
    path: 'formateur',
    loadChildren: () => import('./pages/formateur-dashboard/formateur.routes').then((m) => m.FormateurDashboardRoutes ),
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/dashboard/users.routes').then((m) => m.UserDashboardRoutes ),
  },
  {
    path:"acceil",
    loadComponent:()=>import("./pages/acceil-pages/acceil-pages.component").then(
      (m)=>m.AcceilPagesComponent
    )
  },
  {
    path:"",
    redirectTo:'/acceil', pathMatch:"full"
  }
];

// {
//     path: 'login',
//     loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
//   },
//   {
//     path: 'register',
//     loadComponent: () =>import('./pages/register/register.component').then((m) => m.RegisterComponent),
//   },
//   {
//     path: 'dashboard',
//     //canActivate: [dasboardGuard],
//     loadChildren: () => import('./pages/dashboard/dashboard.routes').then((m) => m.dashboardRoutes ),
//   },
//   {
//     path: '**',
//     redirectTo: 'dashboard',
//   }
