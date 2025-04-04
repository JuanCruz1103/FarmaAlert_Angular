import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-paciente-modal',
  templateUrl: './eliminar-paciente-modal.component.html',
  imports:[MatDialogModule],
  styleUrls: ['./eliminar-paciente-modal.component.css']
})
export class DeletePatientModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePatientModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); 
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }
}
