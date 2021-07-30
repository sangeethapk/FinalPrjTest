import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureRequestComponent } from './brochure-request.component';

describe('BrochureRequestComponent', () => {
  let component: BrochureRequestComponent;
  let fixture: ComponentFixture<BrochureRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochureRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrochureRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
