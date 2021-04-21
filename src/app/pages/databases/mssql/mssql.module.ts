import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../components/components.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { MsSqlRoutes } from "./mssql.routing";

import { MsSqlComponent } from "./mssql.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MsSqlRoutes),
    BsDropdownModule.forRoot(),
    ComponentsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [MsSqlComponent],
  exports: [MsSqlComponent]
})
export class MsSqlModule {}
