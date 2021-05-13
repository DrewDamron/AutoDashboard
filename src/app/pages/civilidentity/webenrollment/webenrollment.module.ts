import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { WebenrollmentRoutes } from "./webenrollment.routing";
import { WebenrollmentComponent } from "./webenrollment.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WebenrollmentRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [WebenrollmentComponent],
  exports: [WebenrollmentComponent]
})
export class WebenrollmentModule {}
