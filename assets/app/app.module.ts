import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { RouterOutlet } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        AppComponent,
        StudentComponent,
        HeaderComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}