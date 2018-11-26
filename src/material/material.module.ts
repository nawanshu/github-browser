import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
  MatProgressBarModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatListModule,
  MatSelectModule
} from '@angular/material';

let importedExportedModules = [
  BrowserAnimationsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule,
  MatSelectModule
];

@NgModule({
  imports: importedExportedModules,
  exports: importedExportedModules
})
export class MaterialModule { }
