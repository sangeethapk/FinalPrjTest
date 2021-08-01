import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecorporateComponent } from './updatecorporate.component';

describe('UpdatecorporateComponent', () => {
  let component: UpdatecorporateComponent;
  let fixture: ComponentFixture<UpdatecorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecorporateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
