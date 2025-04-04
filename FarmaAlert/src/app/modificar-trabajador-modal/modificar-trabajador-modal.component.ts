import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-modificar-trabajador-modal',
  templateUrl: './modificar-trabajador-modal.component.html',
  imports: [
    FormsModule,        
    MatDialogModule,    
    MatFormFieldModule 
    ],
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