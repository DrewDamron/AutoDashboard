import { Routes } from "@angular/router";

import { UesComponent } from "./ues.component";

export const UesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "ues",
        component: UesComponent
      }
    ]
  }
];
