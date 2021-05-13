import { Routes } from "@angular/router";

import { MfaceComponent } from "./mface.component";

export const MfaceRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "mface",
        component: MfaceComponent
      }
    ]
  }
];
