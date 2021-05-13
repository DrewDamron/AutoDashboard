import { Routes } from "@angular/router";

import { MidComponent } from "./mid.component";

export const MidRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "mid",
        component: MidComponent
      }
    ]
  }
];
