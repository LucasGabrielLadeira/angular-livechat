import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatKeyboardComponent } from './chat-keyboard.component';

describe('ChatKeyboardComponent', () => {
  let component: ChatKeyboardComponent;
  let fixture: ComponentFixture<ChatKeyboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatKeyboardComponent]
    });
    fixture = TestBed.createComponent(ChatKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
