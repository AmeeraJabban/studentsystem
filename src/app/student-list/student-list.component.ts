import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';
import { StudentModel } from '../modules/student-model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  StudentList : StudentModel[];

  constructor(private studentsvc: StudentServiceService,
    private router: Router
    ) { }
  
  getStudents(): void {
    this.studentsvc.getstudents()
      .subscribe(StudentList => this.StudentList = StudentList);
  }
  onEditClick(student):void {
    this.router.navigate(['/student/' + student.id]);
  }
  onAddClick():void{
    this.router.navigate(['/student']);
  }
  ngOnInit(): void {
    this.getStudents();
  }

}
