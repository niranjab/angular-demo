import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICalculationHistoryComponent } from './bmicalculation-history.component';

describe('BMICalculationHistoryComponent', () => {
  let component: BMICalculationHistoryComponent;
  let fixture: ComponentFixture<BMICalculationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMICalculationHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMICalculationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
