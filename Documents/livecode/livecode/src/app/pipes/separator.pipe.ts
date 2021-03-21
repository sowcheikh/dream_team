import { UtilsService } from './../utils.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {

  }

  transform(value: number, sep: string): string {
    return this.utilsService.numberSeparator(value, sep);
  }

}
