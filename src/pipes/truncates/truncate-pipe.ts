import { Pipe, PipeTransform } from '@angular/core';

type TruncateSuffixe = '...' | ', etc';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 100, suffix: TruncateSuffixe = '...'): string {
    if (!value) return '';
    if (value.length < limit) return value;

    return value.slice(0, limit) + suffix;
  }

}
