import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modificar-paciente-modal',
  templateUrl: './modificar-paciente-modal.component.html',
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
