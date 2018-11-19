import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

const MODULES = [
  MatToolbarModule, MatIconModule,
  MatButtonModule, MatMenuModule,
  MatInputModule, MatCardModule,
  MatSortModule, MatTableModule,
  MatPaginatorModule, MatGridListModule,
  MatDividerModule, MatListModule 
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule { }
