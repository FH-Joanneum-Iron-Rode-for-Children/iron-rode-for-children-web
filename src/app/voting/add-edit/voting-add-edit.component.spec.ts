import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingAddEditComponent } from './voting-add-edit.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

describe('VotingAddEditComponent', () => {
  let component: VotingAddEditComponent;
  let fixture: ComponentFixture<VotingAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingAddEditComponent],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(VotingAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
