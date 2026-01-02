import {ChangeDetectionStrategy, Component, input} from '@angular/core';

type TextAlign = 'left' | 'center' | 'right' | 'justify';

@Component({
  selector: 'app-text-sections',
  templateUrl: './text-sections.component.html',
  styleUrls: ['./text-sections.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextSectionsComponent {
  readonly title = input<string>();
  readonly text = input.required<string>();
  readonly textAlign = input<TextAlign>('justify');
}
