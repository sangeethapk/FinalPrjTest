import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailCourseListComponent } from './retail-course-list.component';

describe('RetailCourseListComponent', () => {
  let component: RetailCourseListComponent;
  let fixture: ComponentFixture<RetailCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailCourseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
