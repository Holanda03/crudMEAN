import { Component } from "@angular/core";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})

export class SubjectComponent {
    SubjectArray: any[] = []
    currentSubjectId = "";
    name: string = "";
    field: string = "";
}