import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'


export interface Email{
  From: string;
  To: string;
  Subject: string;
  Body: string;
}

// export class Email{
//   from: string;
//   to: string;
//   subject: string;
//   body: string;

//   constructor(from:string, to:string, subject:string, body:string){
//     this.from = from;
//     this.to = to;
//     this.subject = subject;
//     this.body = body;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiServerUrl = 'http://127.0.0.1:5000';
  success = false;

  constructor(private http: HttpClient) { }

  // checkSuccess(){
  //   return this.success;
  // }

  sendEmailInvitation(project_id: string, email: Email){
    return this.http.post(this.apiServerUrl + '/projects/' + project_id + '/invitation', email);
  }
}
