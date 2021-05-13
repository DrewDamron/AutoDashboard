import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { MfaceRoutes } from "./mface.routing";
import { MfaceComponent } from "./mface.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MfaceRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [MfaceComponent],
  exports: [MfaceComponent]
})
export class MfaceModule {}
