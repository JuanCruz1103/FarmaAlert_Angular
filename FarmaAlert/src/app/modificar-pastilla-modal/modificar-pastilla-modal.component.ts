import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-modificar-pastilla-modal',
  templateUrl: './modificar-pastilla-modal.component.html',
  imports: [
    FormsModule,       
    MatDialogModule,    
    MatFormFieldModule
  ],
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