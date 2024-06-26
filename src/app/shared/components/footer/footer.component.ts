import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  urlVideoTutorials = environment.urlVideoTutorials;
  urlVideoAbout = environment.urlVideoAbout;
  urlFacebookPage = environment.urlFacebookPage;
  urlInstagramPage = environment.urlInstagramPage;
  phoneNumber = environment.phoneNumber;
  emailContact = environment.emailContact;
  urlWhatsApp = environment.urlWhatsApp;

  constructor() {}

  ngOnInit() {}
}
