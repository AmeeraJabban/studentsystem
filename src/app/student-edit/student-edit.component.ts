import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../modules/student-model'
import { ActivatedRoute ,Router } from '@angular/router';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { StudentServiceService} from '../Services/student-service.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
  providers :[StudentServiceService],
})
export class StudentEditComponent implements OnInit {
  public student: StudentModel;
  public profileForm : FormGroup;
  public id :number; 
  
  constructor(
    private route: ActivatedRoute,
    private StudentService: StudentServiceService,
    private router: Router,
    private fb: FormBuilder) {
      this.createForm();   
    }
  ngOnInit(): void {
    this.route.params.subscribe(params =>{if ( params['studentID']){
      this.id= +params['studentID'];
    }
  });
    if (this.id !== 0){
      this.getStudent();
    }
  }
  createForm() : void{
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      Age:  [0, [Validators.required]],
      gender:['', [Validators.required]],    
    });
  }
  getStudent(): void {
    this.StudentService.getstudent(this.id)
      .subscribe(student => this.student = student);
      this.profileForm.setValue({ 
        name :this.student.name,
        Age :this.student.Age,
        gender :this.student.Gender,
      })
    }
  onSubmit({ value, valid }: { value: StudentModel, valid: boolean }): void {
    if (!valid) {
      return;
    }
    if (this.student !== null) {
      this.StudentService.update(value);
      this.router.navigate(['/studentList']);
    }
    else {
      this.StudentService.Add(value);
      this.router.navigate(['/studentList']);
    }
  } 
}
