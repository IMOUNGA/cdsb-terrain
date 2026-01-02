import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {IonContent, IonIcon} from "@ionic/angular/standalone";
import {ActivatedRoute} from "@angular/router";
import {ComplianceStatus, Property} from "../../../lib/interfaces";
import {PropertyService} from "../../services/property/property.service";
import {AsyncPipe, NgStyle} from "@angular/common";
import {Observable, of} from "rxjs";
import {ENERGY_RATING_CONFIG} from "../../../lib/utils/property-energy-rating";
import {speedometerOutline} from "ionicons/icons";
import {OCCUPANCY_STATUS_CONFIG} from "../../../lib/utils/occupancy-status-color";
import {BadgeComponentComponent} from "../../../components/badges/badge-component/badge-component.component";
import {AppIconKey} from "../../../lib/utils/registry-icons";

@Component({
  selector: 'app-batiment-detail',
  templateUrl: './batiment-detail.component.html',
  styleUrls: ['./batiment-detail.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    NgStyle,
    AsyncPipe,
    IonIcon,
    BadgeComponentComponent
  ]
})
export class BatimentDetailComponent {
  private route = inject(ActivatedRoute);
  private propertyService = inject(PropertyService);
  readonly ENERGY = ENERGY_RATING_CONFIG;
  readonly OCCUPANCY = OCCUPANCY_STATUS_CONFIG;

  property$: Observable<Property | null> = this.initProperty();

  constructor() {
    this.initProperty();
  }

  initProperty() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return of(null);

    return this.propertyService.getPropertyById(+id)
  }

  complianceIconCheck(status: ComplianceStatus): AppIconKey {
    switch (status) {
      case "OK":
        return 'thumbs-up-outline';
      case "NON CONFORME":
        return 'thumbs-down-outline';
      case "SURVEILLANCE":
        return 'warning-outline';
      default:
          return 'help-circle-outline';
    }
  }

  protected readonly speedometerOutline = speedometerOutline;
}
