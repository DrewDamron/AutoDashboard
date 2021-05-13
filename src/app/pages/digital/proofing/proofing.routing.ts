import { Routes } from "@angular/router";

import { ProofingComponent } from "./proofing.component";

export const ProofingRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "proofing",
        component: ProofingComponent
      }
    ]
  }
];
