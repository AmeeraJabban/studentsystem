import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../modules/student-model';
import { ActivatedRoute ,Router } from '@angular/router';
import { FormGroup, FormControl , Validators,} from '@angular/forms';
import { StudentServiceService} from '../Services/student-service.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: StudentModel;
  profileForm;
  id :number; 
  
  constructor(
    private route: ActivatedRoute,
    private StudentService: StudentServiceService,
    private router: Router) {
      this.id = +this.route.snapshot.paramMap.get('studentID');
    }
  ngOnInit(): void {
    if (this.id !== 0){
      this.getstudent();
    }
    else{
      this.getemptyform();
    }
  }
  getemptyform() : void{
    this.student = null;
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      Age: new FormControl(0, [Validators.required]),
      gender:new FormControl('', [Validators.required]),    
    });
  }
  getstudent(): void {
    this.StudentService.getstudent(this.id)
      .subscribe(student => this.student = student);
      this.profileForm = new FormGroup({
        name: new FormControl(this.student.name, [Validators.required]),
        Age: new FormControl(this.student.Age, [Validators.required]),
        gender:new FormControl(this.student.Gender, [Validators.required]),    
    });
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
  get name() { return this.profileForm.get('name'); }
  get gender() { return this.profileForm.get('gender'); }
  get Age() { return this.profileForm.get('Age'); }
  
}
