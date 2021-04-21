import { Routes } from "@angular/router";

import { MsSqlComponent } from "./mssql.component";

export const MsSqlRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "mssql",
        component: MsSqlComponent
      }
    ]
  }
];