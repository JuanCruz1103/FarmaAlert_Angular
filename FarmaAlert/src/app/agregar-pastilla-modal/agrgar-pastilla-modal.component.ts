import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-pastilla-modal',
  templateUrl: './agregar-pastilla-modal.component.html',
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