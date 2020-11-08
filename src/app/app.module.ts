import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {ButtonModule} from 'primeng/button';




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
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
