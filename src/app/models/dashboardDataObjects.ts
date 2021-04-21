import { ExecutionMetric } from "./executionMetric";
import { TestExecution } from "./testExecution";
import { TestSystem } from "./testSystem";

export class DashboardDataObjects {
    public totalExecutionsChartData: any;
    public passFailChartData: any;
    public systemTestsChartData: any;
    public systemTestsChartCanvas: any;
    public systemTestsChartCTX: any;
    //A raw collection of the data for use to derive specific metrics
    public allExecutionData: ExecutionMetric[] = [];
    //These are used for switching data for the Line Graph
    public allTestExecutions: number[] = [];
    public psTestExecutions: number[] = [];
    public osTestExecutions: number[] = [];
    public wsTestExecutions: number[] = [];
    public executionLineChartLabels: string[] = [];
    public executionChartText: string = "";
    public orgTestsText: string = "";
    //These are used for the Pass/Fail percent pie chart
    public passFailPercent: number = 0;
    public passFailFailed: number = 0;
    public passFailTotal: number = 0;
    public passFailPassed: number = 0;
    public pieChartDataSet: number[] = [];
    //These are used for the system test bar chart
    public systemAllTestsBarLabels: string[] = [];
    public systemTestsBarAllData: number[] = [];
    public systemPSTestsBarLabels: string[] = [];
    public systemTestsBarPSData: number[] = [];
    public systemCITestsBarLabels: string[] = [];
    public systemTestsBarCIData: number[] = [];
    public systemDGTestsBarLabels: string[] = [];
    public systemTestsBarDGData: number[] = [];
    //These are used for determining what data metric is selected
    public allClicked: boolean = true;
    public psClicked: boolean = false;
    public ciClicked: boolean = false;
    public dgClicked: boolean = false;
    //These are for switching front end counts when the systme types are changed
    public executionCount: number = 0;
    public testCount: number = 0;
    public passedTestCount: number = 0;
    public failedTestCount: number = 0;
    //These are used to map various data types together
    public activeFailedTests: ActiveFailedTest[];
    public testSystems: TestSystem[] = [];
    public failedTests: TestExecution[] = [];
}