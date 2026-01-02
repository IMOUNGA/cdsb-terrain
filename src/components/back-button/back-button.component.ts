import {Component, inject, input} from '@angular/core';
import {IonButton, IonIcon, IonRouterOutlet, NavController} from "@ionic/angular/standalone";
import {REGISTRY_ICONS} from "../../lib/utils/registry-icons";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon
  ]
})
export class BackButtonComponent {
  private navCtrl = inject(NavController);
  private routerOutlet = inject(IonRouterOutlet, {optional: true});

  readonly fallbackHref = input('/');
  readonly ICON = REGISTRY_ICONS;

  goBack() {
    if (this.routerOutlet?.canGoBack()) {
      this.navCtrl.back();
    } else {
      this.navCtrl.navigateRoot(this.fallbackHref());
    }
  }
}
