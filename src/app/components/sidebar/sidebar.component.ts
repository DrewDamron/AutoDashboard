import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  smallTitle?: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  smallTitle?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/executivedashboard",
    title: "Executive Dashboard",
    type: "link",
    icontype: "et-icons icon-coins",
  },
  {
    path: "/dashboard",
    title: "Test Dashboard",
    type: "link",
    icontype: "et-icons icon-chart-pie-36",
  },
  {
    path: "",
    title: "Public Security",
    type: "sub",
    icontype: "et-icons icon-lock-circle",
    collapse: "publicsecurity",
    isCollapsed: true,
    children: [
      {
        path: "mbis",
        title: "MBIS",
        type: "link"
      },
      {
        path: "tpe",
        title: "TPE/LiveScan",
        type: "link"
      },
      {
        path: "mface",
        title: "MFace",
        type: "link"
      },
      {
        path: "ues",
        title: "UES",
        type: "link"
      }
    ]
  },
  {
    path: "/civilid",
    title: "Civil Identity",
    type: "sub",
    icontype: "et-icons icon-badge",
    collapse: "civilid",
    isCollapsed: true,
    children: [
      {
        path: "/webenrollment",
        title: "Web Enrollment",
        type: "link"
      },
      {
        path: "/backoffice",
        title: "Back Office",
        type: "link"
      },
      {
        path: "/testing",
        title: "Testing",
        type: "link"
      }
    ]
  },
  {
    path: "/digital",
    title: "Digital",
    type: "sub",
    icontype: "et-icons icon-laptop",
    collapse: "digital",
    isCollapsed: true,
    children: [
      {
        path: "/mid",
        title: "MID",
        type: "link"
      },
      {
        path: "/proofing",
        title: "Proofing",
        type: "link"
      }
    ]
  },
  {
    path: "/jiradefects",
    title: "Jira Defects",
    type: "link",
    icontype: "et-icons icon-alert-circle-exc",
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
