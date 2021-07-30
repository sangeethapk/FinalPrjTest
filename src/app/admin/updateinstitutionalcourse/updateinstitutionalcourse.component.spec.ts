import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinstitutionalcourseComponent } from './updateinstitutionalcourse.component';

describe('UpdateinstitutionalcourseComponent', () => {
  let component: UpdateinstitutionalcourseComponent;
  let fixture: ComponentFixture<UpdateinstitutionalcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateinstitutionalcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinstitutionalcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
