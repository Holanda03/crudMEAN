import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})

export class StudentComponent {
    StudentArray : any[] = [];
    currentStudentID = "";
    name: string = "";
    address: string = "";
    phone: string = "";
    
    constructor(private http: HttpClient ) 
    {
        this.getAllStudent();
    }
    
    getAllStudent() {
        this.http.get("http://localhost:3000/students")
        .subscribe((resultData: any)=>
        {
            console.log(resultData);
            this.StudentArray = resultData;
        });
    }

    // getAllStudent() {
    //     return this.http.get('http://localhost:3000/students')
    //     .map((response: Response) => response.json())
    //     .catch((response: Response) => Observable.throw(response.json()));
    // }
    
    setUpdate(data: any) 
    {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentStudentID = data._id;
    
    }
    
    UpdateRecords()
    {
        let bodyData = {
        "name" : this.name,
        "address" : this.address,
        "phone" : this.phone,
        };
        
        this.http.patch("http://localhost:3000/students"+ "/" + this.currentStudentID,bodyData).subscribe((resultData: any)=>
        {
            console.log(resultData);
            alert("Estudante atualizado.");
            this.getAllStudent();
        
        });
    }
    
    setDelete(data: any) {
        this.http.delete("http://localhost:3000/students"+ "/" + data._id).subscribe((resultData: any)=>
        {
            console.log(resultData);
            alert("Estudante deletado.");
            this.getAllStudent();
    
        });
        }
        
    
    save()
    {
        if(this.currentStudentID == '')
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
        this.http.post("http://localhost:3000/students", bodyData).subscribe((resultData: any)=>
        {
            console.log(resultData);
            alert("Estudante criado com sucesso.");
            this.name = '';
            this.address = '';
            this.phone  = '';
            this.getAllStudent();
        });
    }
}