import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTable } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    MatTable,MatButtonModule,CommonModule,FormsModule,ReactiveFormsModule,RouterModule, 
    MatListModule,MatCardModule,
    MatToolbarModule,MatDialogModule
  ],
  exports:[MatTable,MatButtonModule,CommonModule,FormsModule,ReactiveFormsModule,RouterModule,
    MatListModule,MatCardModule,
    MatToolbarModule,MatDialogModule] 
})
export class SharedModule { }
