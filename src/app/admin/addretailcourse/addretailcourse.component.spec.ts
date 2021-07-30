import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretailcourseComponent } from './addretailcourse.component';

describe('AddretailcourseComponent', () => {
  let component: AddretailcourseComponent;
  let fixture: ComponentFixture<AddretailcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddretailcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddretailcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
