import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TestingRoutes } from "./testing.routing";
import { TestingComponent } from "./testing.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TestingRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [TestingComponent],
  exports: [TestingComponent]
})
export class TestingModule {}
