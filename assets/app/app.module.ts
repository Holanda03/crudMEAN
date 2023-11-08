import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { RouterOutlet } from '@angular/router';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        AppComponent,
        StudentComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}