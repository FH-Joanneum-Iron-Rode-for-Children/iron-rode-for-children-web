import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryDialogComponent } from '../../shared/event-dialog/category-dialog/category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventCategoryDto } from '../../../models/models';

@Component({
  selector: 'app-program-filters',
  templateUrl: './program-filters.component.html',
  styleUrls: ['./program-filters.component.css'],
})
export class ProgramFiltersComponent {
  @Input() dateFilters: string[] = [];
  @Input() categoryFilters: EventCategoryDto[] = [];
  @Output() selectedCategoryChipsChange = new EventEmitter<string[]>();

  private selectedChips: string[] = [];

  constructor(public dialog: MatDialog, private router: Router) {}

  toggleChip(chip: string) {
    const index = this.selectedChips.indexOf(chip);

    if (index > -1) {
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(chip);
    }
    this.selectedCategoryChipsChange.emit(this.selectedChips);
  }

  openDialogToEditCategory() {
    this.dialog.open(CategoryDialogComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }

  goToAddEvent() {
    this.router.navigate(['program/add']);
  }
}
