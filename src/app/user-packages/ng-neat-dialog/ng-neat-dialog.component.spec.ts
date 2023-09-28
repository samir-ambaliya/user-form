import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNeatDialogComponent } from './ng-neat-dialog.component';

describe('NgNeatDialogComponent', () => {
  let component: NgNeatDialogComponent;
  let fixture: ComponentFixture<NgNeatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgNeatDialogComponent]
    });
    fixture = TestBed.createComponent(NgNeatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
