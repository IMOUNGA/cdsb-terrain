import {ChangeDetectionStrategy, Component, input} from '@angular/core';

type CssColor = string;

@Component({
  selector: 'app-badge-component',
  templateUrl: './badge-component.component.html',
  styleUrls: ['./badge-component.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponentComponent  {
  readonly title = input.required<string>();
  readonly text = input.required<string>();
  readonly backgroundColor = input<CssColor>();
  readonly color = input<CssColor>();
  readonly icon = input<string>();

}
