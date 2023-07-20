import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasStrengthComponent } from './pas-strength.component';

describe('PasStrengthComponent', () => {
  let component: PasStrengthComponent;
  let fixture: ComponentFixture<PasStrengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasStrengthComponent]
    });
    fixture = TestBed.createComponent(PasStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
