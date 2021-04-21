import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { MbisRoutes } from "./mbis.routing";
import { MbisComponent } from "./mbis.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MbisRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [MbisComponent],
  exports: [MbisComponent]
})
export class MbisModule {}
