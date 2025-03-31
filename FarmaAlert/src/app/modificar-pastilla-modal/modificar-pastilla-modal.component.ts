import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modificar-pastilla-modal',
  templateUrl: './modificar-pastilla-modal.component.html',
  styleUrls: ['./modificar-pastilla-modal.component.css']
})
export class EditPastillaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditPastillaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit() {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}