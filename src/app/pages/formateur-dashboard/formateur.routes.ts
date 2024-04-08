import {Route, Routes} from "@angular/router";
import {formateurGuard} from "./guard/formateur.guard";

export const FormateurDashboardRoutes : Routes=[
  {
    path:"dashboard",
    canActivate:[formateurGuard],
    loadComponent:()=>import("./formateur-dashboard.component")
      .then((m)=>m.FormateurDashboardComponent)
  }
]
