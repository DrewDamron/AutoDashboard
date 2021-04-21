import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ExecutivedashboardRoutes } from "./executivedashboard.routing";
import { ExecutivedashboardComponent } from "./executivedashboard.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExecutivedashboardRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [ExecutivedashboardComponent],
  exports: [ExecutivedashboardComponent]
})
export class ExecutivedashboardModule {}
