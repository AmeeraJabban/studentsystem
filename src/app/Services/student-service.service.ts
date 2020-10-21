import { Injectable } from '@angular/core';
import {Students } from '../dummydata';
import { StudentModel } from '../modules/student-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  
  constructor() { }
  getstudents(): Observable<StudentModel[]> {
    return of(Students);
  }
  getstudent(id: number): Observable<StudentModel> {
    return of(Students.find(student => student.id === id));
  }
  Add(Student : StudentModel): Observable<StudentModel>{
    Student.id=+this.GetMaxID()+1;
    Students.push(Student);
    return of(Student);
  }
  update(Student : StudentModel): Observable<StudentModel> {
    var index = this.GetIndex(Student.id);
    Students.splice(index,1,Student);
    return of(Student);
  }
  Delete(id:number): Observable<StudentModel>{
    var student =this.getstudent(id);
    var index = this.GetIndex(id);
    Students.splice(index,1);
    return student;
}
GetIndex=(ID)=>{
  return Students.findIndex(item=>item.id == ID);
}
GetMaxID=()=>{
  var max=0;
  for(var i=0;i<Students.length;i++){
      if(max <= Students[i].id){
          max=Students[i].id;
      }
    }
  return max;
  }
}
