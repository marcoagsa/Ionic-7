import { Component, VERSION } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  imports: [IonicModule],
  template: `<ion-header>
    <ion-toolbar>
      <ion-title> {{ name }} </ion-title>
    </ion-toolbar>
  </ion-header>`,
  standalone: true,
  styles: ``,
})
export class HeaderComponent {
  name: string = `Ionic 7 and Angular ${VERSION.major}`;
  constructor() {}
}
