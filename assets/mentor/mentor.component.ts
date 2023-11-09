import { Component } from "@angular/core";
import { Body } from "@angular/http/src/body";

@Component ({
    selector: 'app-mentor',
    templateUrl: './mentor.component.html',
    styleUrls: ['./mentor.component.css']
})

export class MentorComponent {
    mentorArray: any[] = []
    currentMenorId = "";
    name: string = "";
    address: string = "";
    phone: string = "";

    save() {
        let bodyData = {
            "name" : this.name,
            "address" : this.address,
            "phone" : this.phone, 
        };
        console.log(bodyData);
    }
}