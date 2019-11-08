import { NgModule } from '@angular/core';
import {
  MatMenuModule, MatIconModule, MatToolbarModule,
} from '@angular/material';

const material = [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
