import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [IonicModule, HeaderComponent],
  template: `<app-header />

    <ion-content> </ion-content>`,
  standalone: true,
  styles: ``,
})
export class HomeComponent {
  constructor() {}
}
