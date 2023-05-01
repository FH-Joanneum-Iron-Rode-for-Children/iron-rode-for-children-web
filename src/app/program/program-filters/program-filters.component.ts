import { Component } from '@angular/core';
import { CategoryDialogComponent } from '../../category-dialog/category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-filters',
  templateUrl: './program-filters.component.html',
  styleUrls: ['./program-filters.component.css'],
})
export class ProgramFiltersComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openDialogToEditCategory() {
    this.dialog.open(CategoryDialogComponent, {
      disableClose: true,
    });
  }

  goToAddEvent() {
    this.router.navigate(['program/add']);
  }
}
