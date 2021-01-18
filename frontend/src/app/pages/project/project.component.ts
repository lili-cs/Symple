import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { EmailInvitationFormComponent } from '../email-invitation-form/email-invitation-form.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async openForm(){
    if(!this.auth.can('patch:projects') && !this.auth.can('post:projects')){
      return;
    }

    const modal = await this.modalCtrl.create({
      component: EmailInvitationFormComponent,
      componentProps: {}
    });

    modal.present();
  }

}
