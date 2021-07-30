import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRetailCourseComponent } from './update-retail-course.component';

describe('UpdateRetailCourseComponent', () => {
  let component: UpdateRetailCourseComponent;
  let fixture: ComponentFixture<UpdateRetailCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRetailCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRetailCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
