import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TpelivescanRoutes } from "./tpelivescan.routing";
import { TpelivescanComponent } from "./tpelivescan.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TpelivescanRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [TpelivescanComponent],
  exports: [TpelivescanComponent]
})
export class TpelivescanModule {}
