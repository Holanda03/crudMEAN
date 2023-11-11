import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { mentorService } from "../../services/mentor.service";

@Component({
    selector: 'app-mentor',
    templateUrl: './mentor.component.html',
    styleUrls: ['./mentor.component.css']
})

export class MentorComponent {
    mentorArray: any[] = []
    currentMentorId = "";
    name: string = "";
    address: string = "";
    phone: string = "";

    constructor(private mentorService: mentorService) { }

    ngOnInit() {
        this.getAllMentors();
    }

    getAllMentors() {
        this.mentorService.getAllMentors().subscribe((resultData: any) => {
            console.log(resultData);
            this.mentorArray = resultData;
        });
    }

    setUpdate(data: any) {
        this.name = data.name;
        this.address = data.address;
        this.phone = data.phone;
        this.currentMentorId = data._id;
    }

    updateRecords() {
        let bodyData = {
            "name": this.name,
            "address": this.address,
            "phone": this.phone,
        };

        this.mentorService.updateMentor(this.currentMentorId, bodyData).subscribe((resultData: any) => {
            console.log(resultData);
            alert('Mentor atualizado.');
            this.currentMentorId = '';
            this.name = '';
            this.address = '';
            this.phone = '';
            this.getAllMentors();
        });
    }

    setDelete(data: any) {
        this.mentorService.deleteMentor(data._id).subscribe((resultData: any) => {
            console.log(resultData);
            alert('Mentor deletado.');
            this.getAllMentors();
        });
    }

    save() {
        if (this.currentMentorId == '') {
            this.register();
        }
        else {
            this.updateRecords();
        }
    }

    register() {
        let bodyData = {
            "name": this.name,
            "address": this.address,
            "phone": this.phone,
        };

        this.mentorService.createMentor(bodyData).subscribe((resultData: any) => {
            console.log(resultData);
            alert('Mentor criado com sucesso.');
            this.currentMentorId = '';
            this.name = '';
            this.address = '';
            this.phone = '';
            this.getAllMentors();
        });
    }
}