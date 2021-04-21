import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fields, GenericCustomField, IssueType, JiraIssue, JiraUser } from '../models/jiraIssue';

@Injectable({
    providedIn: 'root'
})
export class JiraService {
    constructor(private httpClient: HttpClient) { }

    get getjiraDefects(): JiraIssue[] {
        let jiraDefects: JiraIssue[] = [];
        let jd1: JiraIssue = new JiraIssue();
        jd1.id = "BDDEX-91";
        jd1.self = "https://jira.corp.morphotrak.com/browse/BDDEX-91";
        jd1.key = "BDDEX-91";

        jd1.fields = new Fields();
        jd1.fields.created = "2021-03-24T22:29:39.055-0700";
        jd1.fields.customfield_11703 = "Stuff to work"; //Expected Behavior
        jd1.fields.summary = "Test Dashboard defect";

        jd1.fields.issuetype = new IssueType();
        jd1.fields.issuetype.description = "Bug issuetype with simpler workflow";
        jd1.fields.issuetype.id = "10400";
        jd1.fields.issuetype.name = "Defect";
        jd1.fields.issuetype.subtask = false;
        
        jd1.fields.assignee = new JiraUser();
        jd1.fields.assignee.displayname = "DAMRON Drew";
        jd1.fields.assignee.name = "GT911066";

        jd1.fields.creator = new JiraUser();
        jd1.fields.creator.displayname = "DAMRON Drew";
        jd1.fields.creator.name = "GT911066";

        jd1.fields.customfield_11701 = new GenericCustomField();
        jd1.fields.customfield_11701.value = "MORPHO: MMGS"; //Escaped From

        jd1.fields.customfield_11704 = new GenericCustomField();
        jd1.fields.customfield_11704.value = "A test case is missing"; //Late Detection Cause
        jiraDefects.push(jd1);

        return jiraDefects;
    }   
}