import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringReport } from './spring-report';

describe('SpringReport', () => {
  let component: SpringReport;
  let fixture: ComponentFixture<SpringReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
