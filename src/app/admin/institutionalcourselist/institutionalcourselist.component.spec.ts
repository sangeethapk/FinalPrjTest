import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalcourselistComponent } from './institutionalcourselist.component';

describe('InstitutionalcourselistComponent', () => {
  let component: InstitutionalcourselistComponent;
  let fixture: ComponentFixture<InstitutionalcourselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionalcourselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionalcourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
