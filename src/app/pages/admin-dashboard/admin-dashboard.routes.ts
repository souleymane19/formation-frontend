import {Routes} from "@angular/router";
import {adminGuard} from "./guard/admin.guard";

export const AdminDashboardRoutes:Routes=[
  {
    path:"dashboard",
    canActivate:[adminGuard],
    loadComponent:()=>import("../admin-dashboard/admin-dashboard.component")
      .then((m)=>m.AdminDashboardComponent),
    children:[
      {
        path: "formation",
        loadComponent: () => import("../admin-dashboard/pages/formation/formation.component")
          .then((m) => m.FormationComponent)
      },
      {
        path: "formateur",
        loadComponent: () => import("../admin-dashboard/pages/formateur/formateur.component")
          .then((m) => m.FormateurComponent)
      },
      {
        path: "apprenant",
        loadComponent: () => import("../admin-dashboard/pages/apprenant/apprenant.component")
          .then((m) => m.ApprenantComponent)
      }

    ]
  },


]
