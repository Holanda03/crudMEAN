import { Routes, RouterModule } from "@angular/router";
import { MentorComponent } from "../mentor/mentor.component";
import { StudentComponent } from "../student/student.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo:'/students', pathMatch: 'full'},
    {path: 'mentors', component: MentorComponent},
    {path: 'students', component: StudentComponent}
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);