import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {IonIcon} from "@ionic/angular/standalone";
import {AppIconKey, REGISTRY_ICONS} from "../../../lib/utils/registry-icons";

type CssColor = string;

@Component({
  selector: 'app-badge-component',
  templateUrl: './badge-component.component.html',
  styleUrls: ['./badge-component.component.scss'],
  standalone: true,
  imports: [
    IonIcon
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponentComponent  {
  readonly title = input.required<string>();
  readonly text = input.required<string>();
  readonly backgroundColor = input<CssColor>();
  readonly color = input<CssColor>();
  readonly icon = input<{ icon: AppIconKey, color?: string }>();

  readonly ICONS = REGISTRY_ICONS;

}
