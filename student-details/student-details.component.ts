import { Component, Input,EventEmitter,Output,OnInit, Inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StudentService } from '../services/student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-details',
  imports: [SharedModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent   {
  constructor(
   private dialogRef: MatDialogRef<StudentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { student: any; classroom: any }
  ) {}

  closePopup() {
    this.dialogRef.close();
  }

}