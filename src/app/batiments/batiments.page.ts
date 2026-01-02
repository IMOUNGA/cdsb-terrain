import {Component, inject} from '@angular/core';
import {IonContent} from '@ionic/angular/standalone';
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
  imports: [IonContent, PropertyPresentationCardComponent],
})
export class BatimentsPage {
  private propertiesService = inject(PropertyService);
  readonly properties = toSignal(this.propertiesService.getProperties(), { initialValue: [] });
}
