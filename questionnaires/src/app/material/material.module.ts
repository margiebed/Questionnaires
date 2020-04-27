import { NgModule } from '@angular/core';
import {MatIconModule,
   MatCardModule,
   MatFormFieldModule,
   MatInputModule,
   MatDialogModule,
   MatButtonModule,
   MatSnackBarModule,
   MatCheckboxModule,
   MatSelectModule,
   MatToolbarModule} from '@angular/material';


const MATERIAL_MODULES = [
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [

  ],
  exports:[...MATERIAL_MODULES],
})
export class MaterialModule { }
