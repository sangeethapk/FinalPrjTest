import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecorporatecourseComponent } from './updatecorporatecourse.component';

describe('UpdatecorporatecourseComponent', () => {
  let component: UpdatecorporatecourseComponent;
  let fixture: ComponentFixture<UpdatecorporatecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecorporatecourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecorporatecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
