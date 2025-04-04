import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-agregar-pastilla-modal',
  templateUrl: './agregar-pastilla-modal.component.html',
  imports: [
    FormsModule,        // <-- Necesario para [(ngModel)]
    MatDialogModule,    // <-- Necesario para <mat-dialog-content>
    MatFormFieldModule, // <-- Necesario para <mat-form-field>
    MatInputModule      // <-- Necesario para matInput en <input>
  ],
  styleUrls: ['./agregar-pastilla-modal.component.css']
})
export class AddPastillaModalComponent {
  pastilla = {
    medicamento:'',
    fechacadu:'',
    stock:''
  };

  constructor(public dialogRef: MatDialogRef<AddPastillaModalComponent>) {}

  onSubmit() {
    console.log(this.pastilla);
    this.dialogRef.close(this.pastilla);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}