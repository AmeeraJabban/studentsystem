import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { StudentServiceService} from '../Services/student-service.service';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
  providers: [StudentServiceService],
})
export class StudentEditComponent implements OnInit {
  public student;
  public profileForm: FormGroup;
  public id: number;
    constructor(
    private route: ActivatedRoute,
    private StudentService: StudentServiceService,
    private router: Router,
    private fb: FormBuilder){
      this.createForm();
    }
  ngOnInit(): void {
    const stdID = 'studentID';
    this.route.params.subscribe( params => { if (params[stdID]){
        this.id = +params[stdID];
      }
    });
    if (this.id !== undefined){
      this.getStudent();
    }
  }
  createForm(): void {
    this.profileForm = this.fb.group({
      ID: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }
  getStudent(): void{
    this.StudentService.getstudent(this.id)
      .subscribe(
        response => {
          this.student = response;
          this.profileForm.setValue({
            ID: this.student.ID,
            fname: this.student.fname,
            gender: this.student.gender,
          });
        }
      );
    }
  onSubmit({value, valid }: {value, valid: boolean }): void {
    if (!valid) {
      return;
    }
    if (this.student !== undefined){
      this.StudentService.update(value)
      .subscribe(response => {
          this.router.navigate(['/studentList']);
        }, error => {
          alert('there is an error, please try again');
        });
    }
    else {
      this.StudentService.Add(value)
      .subscribe(response => {
          this.router.navigate(['/studentList']);
        }, error => {
          alert('there is an error, please try again');
        });
    }}}
