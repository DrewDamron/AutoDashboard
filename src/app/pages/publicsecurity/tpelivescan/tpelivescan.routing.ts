import { Routes } from "@angular/router";

import { TpelivescanComponent } from "./tpelivescan.component";

export const TpelivescanRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "tpe",
        component: TpelivescanComponent
      }
    ]
  }
];
