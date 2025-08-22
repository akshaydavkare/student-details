import { Component, Input,EventEmitter,Output,OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  imports: [SharedModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent   implements OnInit{
  constructor(private studentService: StudentService) {}

  student: any = null;

  @Output() close = new EventEmitter<void>();


  ngOnInit() {
    this.studentService.selectedStudent$.subscribe(student => {
      this.student = student;
    });
  }

  closePopup() {
    this.close.emit();
  }
}

