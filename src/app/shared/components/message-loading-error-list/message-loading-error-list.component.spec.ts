import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLoadingErrorListComponent } from './message-loading-error-list.component';

describe('MessageLoadingErrorListComponent', () => {
  let component: MessageLoadingErrorListComponent;
  let fixture: ComponentFixture<MessageLoadingErrorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageLoadingErrorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLoadingErrorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
