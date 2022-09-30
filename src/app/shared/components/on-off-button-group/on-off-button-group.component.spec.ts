import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOffButtonGroupComponent } from './on-off-button-group.component';

describe('OnOffButtonGroupComponent', () => {
  let component: OnOffButtonGroupComponent;
  let fixture: ComponentFixture<OnOffButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnOffButtonGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOffButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
