import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinstitutionalcourseComponent } from './addinstitutionalcourse.component';

describe('AddinstitutionalcourseComponent', () => {
  let component: AddinstitutionalcourseComponent;
  let fixture: ComponentFixture<AddinstitutionalcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinstitutionalcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinstitutionalcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
