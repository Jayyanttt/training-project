import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orignal } from './orignal';

describe('Orignal', () => {
  let component: Orignal;
  let fixture: ComponentFixture<Orignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
