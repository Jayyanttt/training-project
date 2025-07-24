import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterReport } from './winter-report';

describe('WinterReport', () => {
  let component: WinterReport;
  let fixture: ComponentFixture<WinterReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinterReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
