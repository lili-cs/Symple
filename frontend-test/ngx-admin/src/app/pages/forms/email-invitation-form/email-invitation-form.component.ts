import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Email, EmailService } from 'app/services/email.service';
import { AlertService } from 'app/services/alert.service';
import { Subscription } from 'rxjs';

// import {AlertComponent} from 'app/pages/forms/alert/alert.component';


// import { literalMap } from '@angular/compiler';
// import { getMaxListeners } from 'process';
// import { getUniqueXDomainValues } from '@swimlane/ngx-charts';


@Component({
  selector: 'ngx-email-invitation-form',
  templateUrl: './email-invitation-form.component.html',
  styleUrls: ['./email-invitation-form.component.scss']
})
export class EmailInvitationFormComponent implements OnInit {
  // @Input() projectId: string;  //project to join
  projectId = 'test1';
  currentUser = 'lili';
  // @Input() currentUser: string;  //sender name
  sympleOfficialEmail = 'liam.yun.wu@gmail.com';
  registrationLink = 'https://symplenow.us.auth0.com/authorize?audience=symple&;response_type=token&;client_id=G9xC7ujs6leh6d6xn8jpWeTS0m4vyvXo&redirect_uri=http://localhost:4200/';
  emailInvitationForm: FormGroup;
  loading = false;
  submitted = false;
  // // project_id = '1';
  // // sender = 'lili';

  private subscription: Subscription;
  message: any;


  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private alertService: AlertService,
    private router: Router
    // private email: Email,
    ) { }

  ngOnInit(): void {
    // this.email = {
    //   from: this.sympleOfficialEmail,
    //   to: this.emailInvitationForm.get('recipientEmail').value,
    //   subject: this.emailInvitationForm.get('recipientName').value + ',' + this.currentUser + 'Invited You to Join Symple Project!',
    //   body: this.registrationLink
    // };
    // let from:string = this.sympleOfficialEmail;
    // let to:string = this.emailInvitationForm.get('recipientEmail').value;
    // let subject:string = this.emailInvitationForm.get('recipientName').value + ',' + this.currentUser + 'Invited You to Join Symple Project!';
    // let body:string = this.registrationLink;
    // this.email = new Email(from, to, subject, body);
    this.emailInvitationForm = this.formBuilder.group({
      recipientName: '',
      recipientEmail: ['', [Validators.required, Validators.email]]
    });

    this.subscription = this.alertService.getMessage().subscribe(message => { 
      this.message = message; 
  });
  }

  get f() { return this.emailInvitationForm.controls;}

  composeEmail(from:string, to:string, subject:string, body:string){
    let email: Email = {
      From: from,
      To: to,
      Subject: subject,
      Body: body
    };
    return email
  }

  onSubmit(){
    this.submitted = true;
    if(this.emailInvitationForm.invalid){
      return;
    }
    this.loading = true;

    let from:string = this.sympleOfficialEmail;
    let to:string = this.emailInvitationForm.get('recipientEmail').value;
    let subject:string = this.emailInvitationForm.get('recipientName').value + ', ' + this.currentUser + 'Invited You to Join Symple Project!';
    let body:string = this.registrationLink;

    let email: Email = this.composeEmail(from, to, subject, body);

    this.emailService.sendEmailInvitation(this.projectId, email).subscribe(res =>{
      // let alertComponent = new AlertComponent(this.alertService);
      if (res['success']){
        this.alertService.success('Invitation has been sent.', true);
        // alertComponent.success('Invitation has been sent.', true);
        this.router.navigate(['/']); 
      }
      else{
        this.alertService.error('Fail to send invitation.');
        // this.alertComponent.error('Fail to send invitation.');
        this.loading = false;
      }
      }
    );
  }
}
