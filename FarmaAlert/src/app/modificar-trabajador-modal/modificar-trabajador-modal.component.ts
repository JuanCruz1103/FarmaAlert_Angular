import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modificar-trabajador-modal',
  templateUrl: './modificar-trabajador-modal.component.html',
  styleUrls: ['./modificar-trabajador-modal.component.css']
})
export class EditTrabajadorModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTrabajadorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit() {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}