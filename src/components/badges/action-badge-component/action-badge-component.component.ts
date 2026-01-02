import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BuildingAction} from "../../../lib/interfaces";
import {IonIcon} from "@ionic/angular/standalone";
import {REGISTRY_ICONS} from "../../../lib/utils/registry-icons";
import {ACTION_STATUS_CONFIG} from "../../../lib/utils/action-status-color";

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
  readonly ICON = REGISTRY_ICONS;
  readonly ACTIONS_CONFIG = ACTION_STATUS_CONFIG;
}
