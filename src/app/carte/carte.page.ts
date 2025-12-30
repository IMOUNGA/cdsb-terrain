import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../components/explore-container/explore-container.component';

@Component({
  selector: 'app-carte-page',
  templateUrl: 'carte.page.html',
  styleUrls: ['carte.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class CartePage {

  constructor() {}

}
