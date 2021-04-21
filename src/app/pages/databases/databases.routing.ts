import { Routes } from "@angular/router";
import { MsSqlComponent } from "./mssql/mssql.component";

export const DatabasesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "mssql",
        component: MsSqlComponent
      }
    ]
  },
  //{
  //  path: "",
  //  children: [
  //    {
  //      path: "mysql",
  //      component: MySqlComponent
  //    }
  //  ]
  //}
];
