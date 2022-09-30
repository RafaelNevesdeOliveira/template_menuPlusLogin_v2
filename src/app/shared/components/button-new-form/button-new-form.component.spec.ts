import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNewFormComponent } from './button-new-form.component';

describe('ButtonNewFormComponent', () => {
  let component: ButtonNewFormComponent;
  let fixture: ComponentFixture<ButtonNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
