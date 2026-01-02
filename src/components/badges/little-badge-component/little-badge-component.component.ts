import {ChangeDetectionStrategy, Component, input} from '@angular/core';

type CssColor = string;
type BadgeStyle = 'circle' | 'rectangle';

@Component({
  selector: 'app-little-badge-component',
  templateUrl: './little-badge-component.component.html',
  styleUrls: ['./little-badge-component.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LittleBadgeComponentComponent {
  readonly backgroundColor = input.required<CssColor>();
  readonly textColor = input.required<CssColor>();
  readonly text = input.required<string>();
  readonly type = input.required<BadgeStyle>();
}
