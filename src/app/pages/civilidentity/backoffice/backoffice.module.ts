import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BackofficeRoutes } from "./backoffice.routing";
import { BackofficeComponent } from "./backoffice.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BackofficeRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [BackofficeComponent],
  exports: [BackofficeComponent]
})
export class BackofficeModule {}
