import { Routes } from "@angular/router";

import { ExecutivedashboardComponent } from "./executivedashboard.component";

export const ExecutivedashboardRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "executivedashboard",
        component: ExecutivedashboardComponent
      }
    ]
  }
];
