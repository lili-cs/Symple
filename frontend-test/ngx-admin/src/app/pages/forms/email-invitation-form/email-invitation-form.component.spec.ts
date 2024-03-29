import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInvitationFormComponent } from './email-invitation-form.component';

describe('EmailInvitationFormComponent', () => {
  let component: EmailInvitationFormComponent;
  let fixture: ComponentFixture<EmailInvitationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailInvitationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInvitationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
