import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentServiceService],
})
export class StudentListComponent implements OnInit {
  StudentList;
  constructor(
    private studentsvc: StudentServiceService,
    private router: Router
    ) { }
  getStudents(): void {
    this.studentsvc.getstudents()
      .subscribe(students => this.StudentList = students);
  }
  onEditClick(student): void {
    this.router.navigate(['/student/' + student.ID]);
  }
  onAddClick(): void{
    this.router.navigate(['/student']);
  }
  ngOnInit(): void {
    this.getStudents();
  }
}
