import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinstitutionalComponent } from './updateinstitutional.component';

describe('UpdateinstitutionalComponent', () => {
  let component: UpdateinstitutionalComponent;
  let fixture: ComponentFixture<UpdateinstitutionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateinstitutionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinstitutionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
