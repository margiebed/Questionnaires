import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {
  MatDialogModule,
  MatDialogConfig,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
];

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: "800px",
  disableClose: true,
  hasBackdrop: true,
};

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: MAT_DIALOG_GLOBAL_CONFIG,
    },
  ],
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule {}
