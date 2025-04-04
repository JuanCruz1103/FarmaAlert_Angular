import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-eliminar-trabajador-modal',
  templateUrl: './eliminar-trabajador-modal.component.html',
  imports: [MatDialogModule],
  styleUrls: ['./eliminar-trabajador-modal.component.css']
})
export class DeleteTrabajadorModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTrabajadorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); 
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }
}