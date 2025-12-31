import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import {
  businessOutline,
  earthOutline,
  notificationsOutline,
  playCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  readonly tabIcons = {
    batiments: businessOutline,
    carte: earthOutline,
    actions: playCircleOutline,
    alertes: notificationsOutline,
  }

}
