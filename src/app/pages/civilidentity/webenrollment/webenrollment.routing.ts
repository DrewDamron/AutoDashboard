import { Routes } from "@angular/router";

import { WebenrollmentComponent } from "./webenrollment.component";

export const WebenrollmentRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "webenrollment",
        component: WebenrollmentComponent
      }
    ]
  }
];
