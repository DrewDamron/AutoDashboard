import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { DatabasesRoutes } from "./databases.routing";
import { MsSqlComponent } from "./mssql/mssql.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DatabasesRoutes),
    NgxDatatableModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  declarations: [MsSqlComponent]
})
export class DatabasesModule {}
