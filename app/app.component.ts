import { Component } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StudentService } from '../services/student.service';
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { StudentComponent } from "../student/student.component";


@Component({
  selector: 'app-root',
  imports: [SharedModule, StudentDetailsComponent, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   showPopup = false;

  constructor(private studentService: StudentService) {
    // Listen for student changes and toggle popup
    this.studentService.selectedStudent$.subscribe(student => {
      this.showPopup = !!student; // true if student selected
    });
  }

  closePopup() {
    this.studentService.clearSelectedStudent();
    this.showPopup = false;
  }
}
