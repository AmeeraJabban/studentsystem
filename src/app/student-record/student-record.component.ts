import { Component, OnInit , Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css'],
})
export class StudentRecordComponent implements OnInit {
  @Input() student;
  @Output() Edit = new EventEmitter();
  onEditbtn_Click(): void {
    this.Edit.emit(this.student);
  }
  constructor(){}
  ngOnInit(): void {
  }
}
