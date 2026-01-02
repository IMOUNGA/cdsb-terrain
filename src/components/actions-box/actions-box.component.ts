import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BuildingAction} from "../../lib/interfaces";
import {ActionBadgeComponentComponent} from "../badges/action-badge-component/action-badge-component.component";

@Component({
  selector: 'app-actions-box',
  templateUrl: './actions-box.component.html',
  styleUrls: ['./actions-box.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ActionBadgeComponentComponent
  ]
})
export class ActionsBoxComponent {
readonly actionsList = input.required<BuildingAction[]>();

}
