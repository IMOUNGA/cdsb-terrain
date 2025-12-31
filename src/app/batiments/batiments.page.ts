import {Component, inject} from '@angular/core';
import {IonContent, IonHeader, IonText, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {toSignal} from "@angular/core/rxjs-interop";
import {PropertyService} from "../services/property/property.service";
import {
  PropertyPresentationCardComponent
} from "../../components/property-presentation-card/property-presentation-card.component";

@Component({
  selector: 'app-batiments-page',
  templateUrl: 'batiments.page.html',
  styleUrls: ['batiments.page.scss'],
  standalone: true,
  imports: [IonContent, PropertyPresentationCardComponent, IonTitle, IonHeader, IonToolbar, IonText],
})
export class BatimentsPage {
  private propertiesService = inject(PropertyService);
  readonly properties = toSignal(this.propertiesService.getProperties(), { initialValue: [] });

}
