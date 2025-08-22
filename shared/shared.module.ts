import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule, 
    MatListModule,
    MatToolbarModule,MatDialogModule
  ],
  exports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule,
    MatListModule,
    MatToolbarModule,MatDialogModule] 
})
export class SharedModule { }
