import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcorporatecourseComponent } from './addcorporatecourse.component';

describe('AddcorporatecourseComponent', () => {
  let component: AddcorporatecourseComponent;
  let fixture: ComponentFixture<AddcorporatecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcorporatecourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcorporatecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
