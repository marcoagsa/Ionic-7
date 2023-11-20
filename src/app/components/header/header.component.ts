import { Component, VERSION } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import IonicInfo from '@ionic/angular/package.json';

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
  name: string = `Ionic ${IonicInfo.version} and Angular ${VERSION.full}`;
  constructor() {}
}
