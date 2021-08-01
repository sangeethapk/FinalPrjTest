import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateretailComponent } from './updateretail.component';

describe('UpdateretailComponent', () => {
  let component: UpdateretailComponent;
  let fixture: ComponentFixture<UpdateretailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateretailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateretailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
