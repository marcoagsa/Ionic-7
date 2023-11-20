import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-info-card',
  imports: [IonicModule],
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title class="title">Project Information</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-text>
          This project aims to provide an environment for testing Ionic with
          Angular on the web.
        </ion-text>
        <ion-text color="primary">Minimum Requirements:</ion-text>
        <ul>
          <li>Ionic minimal version 7</li>
          <li>Angular version 16</li>
        </ul>
        <ion-text>
          Please make sure you have the required versions installed to utilize
          this environment effectively.
        </ion-text>
        <ion-text color="danger">
          -- On the top of the header you have the current Ionic and angular
          versions
        </ion-text>
      </ion-card-content>
    </ion-card>
  `,
  standalone: true,
  styles: `
    ion-card {
      margin: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    ion-card-content {
        padding: 16px;
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;
    }

    ion-text {
      padding-top: 10px;
      display:block;
    }
  `,
})
export class InfoCardComponent {
  constructor() {}
}
