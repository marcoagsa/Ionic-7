import { InfoCardComponent } from './../info-card/info-card.components';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [IonicModule, HeaderComponent, InfoCardComponent],
  template: `
    <app-header />
    <ion-content class="ion-padding">
      <app-info-card />
    </ion-content>
  `,
  standalone: true,
  styles: ``,
})
export class HomeComponent {
  constructor() {}
}
