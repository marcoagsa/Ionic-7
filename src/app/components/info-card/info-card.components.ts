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
        <p>
          This project aims to provide an environment for testing Ionic with
          Angular on the web.
        </p>
        <p>Minimum Requirements:</p>
        <ul>
          <li>Ionic minimal version 7</li>
          <li>Angular version 16</li>
        </ul>
        <p>
          Please make sure you have the required versions installed to utilize
          this environment effectively.
        </p>
        <p class="danger">
          On the top of the header you have the current Ionic and angular
          versions
        </p>
      </ion-card-content>
    </ion-card>
  `,
  standalone: true,
  styles: `
  ion-card {
  margin: 20px; /* Add margin for spacing */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */

  ion-card-content {
    padding: 16px; /* Add padding inside the card content */
  }

  ul {
    list-style-type: disc; /* Use bullets for list items */
    padding-left: 20px; /* Indent the list */
  }
  p {
    padding-top: 10px;
  }

  .danger {
    color: var(--ion-color-danger);
  }
}
  `,
})
export class InfoCardComponent {
  constructor() {}
}
