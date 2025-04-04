import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-agregar-trabajador-modal',
  templateUrl: './agregar-trabajador-modal.component.html',
  imports: [
    FormsModule,        
    MatDialogModule,    
    MatFormFieldModule, 
    MatInputModule      
  ],
  styleUrls: ['./agregar-trabajador-modal.component.css']
})
export class AddTrabajadorModalComponent {
  trabajador = {
    nombre: '',
    edad:'',
    pacientes:''
  };

  constructor(public dialogRef: MatDialogRef<AddTrabajadorModalComponent>) {}

  onSubmit() {
    console.log(this.trabajador);
    this.dialogRef.close(this.trabajador);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}