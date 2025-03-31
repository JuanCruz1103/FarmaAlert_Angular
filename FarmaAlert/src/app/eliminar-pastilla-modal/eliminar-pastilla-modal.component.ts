import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-pastilla-modal',
  templateUrl: './eliminar-pastilla-modal.component.html',
  styleUrls: ['./eliminar-pastilla-modal.component.css']
})
export class DeletePastillaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePastillaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); 
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }
}