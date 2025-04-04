import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-modificar-paciente-modal',
  templateUrl: './modificar-paciente-modal.component.html',
  imports: [
    FormsModule,        // <-- Necesario para [(ngModel)]
    MatDialogModule,    // <-- Necesario para <mat-dialog-content>
    MatFormFieldModule, // <-- Necesario para <mat-form-field>
    
  ],
  styleUrls: ['./modificar-paciente-modal.component.css']
})
export class EditPatientModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditPatientModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit() {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
