import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from '../student/student.component';
import { RouterOutlet } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from '../header/header.component';
import { MentorComponent } from '../mentor/mentor.component';
import { myrouting } from './app.routing';


@NgModule({
    declarations: [
        AppComponent,
        StudentComponent,
        HeaderComponent,
        MentorComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule, HttpModule, myrouting],
    bootstrap: [AppComponent]
})
export class AppModule {

}