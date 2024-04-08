import {Routes} from "@angular/router";
import {userGuard} from "./guard/user.guard";

export const UserDashboardRoutes:Routes = [
  {
    path:"dashboard",
    canActivate:[userGuard],
    loadComponent:()=>import("./dashboard.component")
      .then((m)=>m.DashboardComponent)
  }
]
