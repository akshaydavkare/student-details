import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  private selectedStudentSource = new BehaviorSubject<any>(null);
  selectedStudent$ = this.selectedStudentSource.asObservable();

  setSelectedStudent(student: any) {
    this.selectedStudentSource.next(student);
  }
  clearSelectedStudent() {
    this.selectedStudentSource.next(null);
  }
}
