import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatecourselistComponent } from './corporatecourselist.component';

describe('CorporatecourselistComponent', () => {
  let component: CorporatecourselistComponent;
  let fixture: ComponentFixture<CorporatecourselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatecourselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatecourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
