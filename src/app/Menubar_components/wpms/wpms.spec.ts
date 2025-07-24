import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPMS } from './wpms';

describe('WPMS', () => {
  let component: WPMS;
  let fixture: ComponentFixture<WPMS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WPMS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WPMS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
