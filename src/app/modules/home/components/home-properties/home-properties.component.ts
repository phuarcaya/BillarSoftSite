import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-home-properties',
  templateUrl: './home-properties.component.html',
  styleUrls: ['./home-properties.component.css']
})
export class HomePropertiesComponent implements OnInit {
  urlVideoTutorials = environment.urlVideoTutorials;
  urlVideoAbout = environment.urlVideoAbout;
  urlFacebookPage = environment.urlFacebookPage;
  urlInstagramPage = environment.urlInstagramPage;
  phoneNumber = environment.phoneNumber;
  emailContact = environment.emailContact;
  urlWhatsApp = environment.urlWhatsApp;

  constructor() { }

  ngOnInit() {
  }

}
