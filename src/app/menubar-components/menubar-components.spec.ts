import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarComponents } from './menubar-components';

describe('MenubarComponents', () => {
  let component: MenubarComponents;
  let fixture: ComponentFixture<MenubarComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
