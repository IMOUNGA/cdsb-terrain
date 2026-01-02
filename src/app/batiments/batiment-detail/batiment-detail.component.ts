import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {ActivatedRoute} from "@angular/router";
import {ComplianceStatus, Property} from "../../../lib/interfaces";
import {PropertyService} from "../../services/property/property.service";
import {AsyncPipe} from "@angular/common";
import {Observable, of} from "rxjs";
import {ENERGY_RATING_CONFIG, PROPERTY_USAGES_CONFIG} from "../../../lib/utils/property-configs";
import {OCCUPANCY_STATUS_CONFIG} from "../../../lib/utils/occupancy-status-color";
import {BadgeComponentComponent} from "../../../components/badges/badge-component/badge-component.component";
import {AppIconKey} from "../../../lib/utils/registry-icons";
import {COMPLIANCE_STATUS_CONFIG} from "../../../lib/utils/compliance-status";
import {ActionsBoxComponent} from "../../../components/actions-box/actions-box.component";
import {
  LittleBadgeComponentComponent
} from "../../../components/badges/little-badge-component/little-badge-component.component";
import {TextSectionsComponent} from "../../../components/text-sections/text-sections.component";
import {BackButtonComponent} from "../../../components/back-button/back-button.component";

@Component({
  selector: 'app-batiment-detail',
  templateUrl: './batiment-detail.component.html',
  styleUrls: ['./batiment-detail.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    AsyncPipe,
    BadgeComponentComponent,
    ActionsBoxComponent,
    LittleBadgeComponentComponent,
    TextSectionsComponent,
    BackButtonComponent
  ]
})
export class BatimentDetailComponent {
  private route = inject(ActivatedRoute);
  private propertyService = inject(PropertyService);
  readonly ENERGY = ENERGY_RATING_CONFIG;
  readonly OCCUPANCY = OCCUPANCY_STATUS_CONFIG;
  readonly PROPERTY_USAGES = PROPERTY_USAGES_CONFIG;
  readonly COMPLIANCE_STATUS = COMPLIANCE_STATUS_CONFIG;

  property$: Observable<Property | null> = this.initProperty();

  constructor() {
    this.initProperty();
  }

  initProperty() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return of(null);

    return this.propertyService.getPropertyById(+id)
  }

  complianceIconCheck(status: ComplianceStatus): { icon: AppIconKey, color: string } {
    switch (status) {
      case "compliant":
        return {icon: 'thumbs-up-outline', color: COMPLIANCE_STATUS_CONFIG.compliant.color};
      case "underReview":
        return {icon: 'timeOutline', color: COMPLIANCE_STATUS_CONFIG.underReview.color};
      case "nonCompliant":
        return {icon: 'warning-outline', color: COMPLIANCE_STATUS_CONFIG.nonCompliant.color};
      default:
        return {icon: 'help-circle-outline', color: COMPLIANCE_STATUS_CONFIG.compliant.color};
    }
  }
}
