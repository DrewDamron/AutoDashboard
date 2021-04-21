import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./pages/executivedashboard/executivedashboard.module#ExecutivedashboardModule"
      },
      {
        path: "",
        loadChildren:
          "./pages/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "",
        loadChildren:
          "./pages/jiradefects/jiradefects.module#JiraDefectsModule"
      },
      {
        path: "components",
        loadChildren:
          "./pages/components/components.module#ComponentsPageModule"
      },
      {
        path: "",
        loadChildren: "./pages/publicsecurity/mbis/mbis.module#MbisModule"
      },
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
