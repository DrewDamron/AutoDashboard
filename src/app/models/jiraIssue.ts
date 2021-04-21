import { stringify } from "@angular/compiler/src/util";
import { StringLengthRule } from "devextreme/ui/validation_engine";

export class JiraIssue {
    id: string;
    self: string;
    key: string;
    fields: Fields;
    businessLine: string;
}

export class Fields {
    summary: string;
    issuetype: IssueType;
    assignee: JiraUser;
    creator: JiraUser;
    customfield_11703: string; //Expected Behavior
    customfield_11704: GenericCustomField; //Late Detection Cause
    customfield_11701: GenericCustomField; //Escaped From
    created: string;
    project: JiraProject;
}

export class IssueType {
    id: string;
    description: string;
    name: string;
    subtask: boolean;
}

export class GenericCustomField {
    value: string;
}

export class JiraUser {
    name: string;
    displayname: string;
}

export class JiraProject {
    self: string;
    id: string;
    key: string;
    name: string;
}