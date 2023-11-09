import { Component } from "@angular/core";
import { Body } from "@angular/http/src/body";
import { HttpClient } from '@angular/common/http';

@Component ({
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
   
    constructor(private http: HttpClient ) 
    {
        this.getAllStudent();
    }
    
    getAllStudent() {
        this.http.get("http://localhost:3000/mentors")
        .subscribe((resultData: any)=>
        {
            console.log(resultData);
            this.mentorArray = resultData;
        });
    }
  
    setUpdate(data: any) 
    {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentMentorId = data._id;
    
    }
    
    UpdateRecords()
    {
        let bodyData = {
        "name" : this.name,
        "address" : this.address,
        "phone" : this.phone,
        };
        
        this.http.patch("http://localhost:3000/mentors"+ "/" + this.currentMentorId,bodyData).subscribe((resultData: any)=>
        {
            console.log(resultData);
            alert("Mentor atualizado.");
            this.getAllStudent();
        
        });
    }
    
    setDelete(data: any) {
        this.http.delete("http://localhost:3000/mentors"+ "/" + data._id).subscribe((resultData: any)=>
        {
            console.log(resultData);
            alert("Mentor deletado.");
            this.getAllStudent();
    
        });
        }
        
    
    save()
    {
        if(this.currentMentorId == '')
        {
            this.register();
        }
        else
        {
        this.UpdateRecords();
        }       
    }
    
    register()
    {
        let bodyData = {
        "name" : this.name,
        "address" : this.address,
        "phone" : this.phone, 
    };
        this.http.post("http://localhost:3000/mentors", bodyData).subscribe((resultData: any)=>
        {
            console.log(resultData);
            alert("Mentor criado com sucesso.");
            this.name = '';
            this.address = '';
            this.phone  = '';
            this.getAllStudent();
        });
    }
}