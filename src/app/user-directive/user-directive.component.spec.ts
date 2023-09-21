import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectiveComponent } from './user-directive.component';

describe('UserDirectiveComponent', () => {
  let component: UserDirectiveComponent;
  let fixture: ComponentFixture<UserDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDirectiveComponent]
    });
    fixture = TestBed.createComponent(UserDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
