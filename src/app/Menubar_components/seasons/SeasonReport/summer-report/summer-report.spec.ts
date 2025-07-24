import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerReport } from './summer-report';

describe('SummerReport', () => {
  let component: SummerReport;
  let fixture: ComponentFixture<SummerReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummerReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
