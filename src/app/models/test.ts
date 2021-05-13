export class Test {
    id: string;
    description: string;
    lastResult: string;
    system: string;
    lastExecution: string;
    steps: TestStep[];
    systemType: string;
    collapseSteps: boolean;
}

export class TestStep {
    name: string;
    lastExecution: string;
    lastResult: string;
    screenshotURL: string;
    collapseImage: boolean;
}