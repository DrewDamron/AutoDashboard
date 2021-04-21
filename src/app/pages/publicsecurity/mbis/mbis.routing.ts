import { Routes } from "@angular/router";

import { MbisComponent } from "./mbis.component";

export const MbisRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "mbis",
        component: MbisComponent
      }
    ]
  }
];
