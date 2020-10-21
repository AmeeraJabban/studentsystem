import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SimpleRouteComponent } from './simple-route/simple-route.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentRecordComponent } from './student-record/student-record.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleRouteComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentRecordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'simple', component: SimpleRouteComponent },
      { path: 'studentList', component: StudentListComponent },
      { path: 'student/:studentID', component: StudentEditComponent },
      { path: 'student', component: StudentEditComponent },

      
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
