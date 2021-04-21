export class TestExecution {
    test: string;
    executionDate: string;
    host: string;
    id: string;
    remediationNeeded: boolean;
    remediationTook: string;
    result: string;
    steps: TestExecutionStep[];
    system: string;
    testDuration: string;
    testId: string;
}

export class TestExecutionStep {
    duration: string;
    name: string;
    status: string;
}