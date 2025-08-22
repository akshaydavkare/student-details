import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StudentService } from '../services/student.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';


@Component({
  selector: 'app-student',
  imports: [SharedModule],
  
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() selectedClassroom: any;
  
 classrooms = [
    {
      classroomId: 1,
      className: "Class 1A",
      teacher: "Mr. Sharma",
      subject: "Mathematics",
      students: [
        { studentId: 1, name: "Amit", age: 10, grade: "A" },
        { studentId: 2, name: "Sneha", age: 11, grade: "B" },
        { studentId: 3, name: "Rohit", age: 10, grade: "A" }
      ]
    },
    {
      classroomId: 2,
      className: "Class 2B",
      teacher: "Mrs. Verma",
      subject: "Science",
      students: [
        { studentId: 4, name: "Priya", age: 12, grade: "A" },
        { studentId: 5, name: "Arjun", age: 12, grade: "B" },
        { studentId: 6, name: "Karan", age: 11, grade: "C" }
      ]
    },
    {

      classroomId: 3,
      className: "Class 3C",
      teacher: "Ms. Iyer",
      subject: "History",
      students: [
        { studentId: 7, name: "Anjali", age: 13, grade: "A" },
        { studentId: 8, name: "Vikram", age: 13, grade: "B" },
        { studentId: 9, name: "Meera", age: 12, grade: "A" }
      ]
    },
    {
      classroomId: 4,
      className: "Class 4D",
      teacher: "Mr. Gupta",
      subject: "Geography",
      students: [
        { studentId: 10, name: "Riya", age: 14, grade: "A" },
        { studentId: 11, name: "Aditya", age: 14, grade: "C" },
        { studentId: 12, name: "Simran", age: 13, grade: "B" }
      ]
    },{
      classroomId: 5,
      className: "Class 5E",
      teacher: "Mrs. Khan",
      subject: "English",
      students: [
        { studentId: 13, name: "Kabir", age: 15, grade: "B" },
        { studentId: 14, name: "Nisha", age: 15, grade: "A" },
        { studentId: 15, name: "Tarun", age: 14, grade: "C" }
      ]
    }
  ];

 
  showPopup: boolean = false;
  constructor(private studentService: StudentService) {}

  selectClassroom(classroom: any) {
    this.selectedClassroom = classroom;
  }

  showDetails(student: any) {
   
    this.studentService.setSelectedStudent(student);
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
}
