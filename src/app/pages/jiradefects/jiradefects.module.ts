import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { JiraDefectsRoutes } from "./jiradefects.routing";
import { JiraDefectsComponent } from "./jiradefects.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(JiraDefectsRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [JiraDefectsComponent],
  exports: [JiraDefectsComponent]
})
export class JiraDefectsModule {}
