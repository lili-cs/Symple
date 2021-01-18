import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-email-invitation-form',
  templateUrl: './email-invitation-form.component.html',
  styleUrls: ['./email-invitation-form.component.scss'],
})
export class EmailInvitationFormComponent implements OnInit {
  url = environment.apiServerUrl;
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  sendInvitation(project_id: String){
    this.http.get(this.url + '/projects/'+ project_id + '/invitation')
    .subscribe((res:any) => {
      console.log(res)
    });
  }

}
