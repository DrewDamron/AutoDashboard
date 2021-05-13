import { Routes } from "@angular/router";

import { BackofficeComponent } from "./backoffice.component";

export const BackofficeRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "backoffice",
        component: BackofficeComponent
      }
    ]
  }
];
