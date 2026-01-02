import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BuildingAction} from "../../../lib/interfaces";
import {IonIcon} from "@ionic/angular/standalone";
import {speedometerOutline} from "ionicons/icons";

@Component({
  selector: 'app-action-badge-component',
  templateUrl: './action-badge-component.component.html',
  styleUrls: ['./action-badge-component.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonIcon
  ]
})
export class ActionBadgeComponentComponent {
  readonly action = input.required<BuildingAction>();

  protected readonly speedometerOutline = speedometerOutline;
}
