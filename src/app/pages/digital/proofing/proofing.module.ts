import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ProofingRoutes } from "./proofing.routing";
import { ProofingComponent } from "./proofing.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProofingRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [ProofingComponent],
  exports: [ProofingComponent]
})
export class ProofingModule {}
