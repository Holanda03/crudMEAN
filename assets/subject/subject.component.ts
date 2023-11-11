import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../../services/subject.service";

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

    constructor(private subjectService: SubjectService) {}

    ngOnInit() {
        this.getAllSubjects();
    }
    
    getAllSubjects() {
        this.subjectService.getAllSubjects().subscribe((resultData: any) => {
            console.log(resultData);
            this.SubjectArray = resultData;
        });
    }

    setUpdate(data: any) {
        this.name = data.name;
        this.field = data.field;
    }

    UpdateRecords() {
        let bodyData = {
            "name": this.name,
            "field": this.field,
        };

        this.subjectService.updateSubject(this.currentSubjectId, bodyData).subscribe((resultData: any) => {
            console.log(resultData);
            alert('Matéria atualizada.');
            this.getAllSubjects();
        });
    }

    setDelete(data: any) {
        this.subjectService.deleteSubject(data._id).subscribe((resultData: any) => {
            console.log(resultData);
            alert('Matéria deletada.');
            this.getAllSubjects();
        });
    }

    save() {
        if (this.currentSubjectId == '') {
            this.register();
        }
        else {
            this.UpdateRecords();
        }
    }

    register() {
        let bodyData = {
            "name": this.name,
            "field": this.field,
        };

        this.subjectService.createSubject(bodyData).subscribe((resultData: any) => {
            console.log(resultData);
            alert('Matéria criada com sucesso.');
            this.name = '';
            this.field = '';
            this.getAllSubjects();
        });
    }
}