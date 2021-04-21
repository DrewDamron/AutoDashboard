import { Routes } from "@angular/router";

import { JiraDefectsComponent } from "./jiradefects.component";

export const JiraDefectsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "jiradefects",
        component: JiraDefectsComponent
      }
    ]
  }
];
