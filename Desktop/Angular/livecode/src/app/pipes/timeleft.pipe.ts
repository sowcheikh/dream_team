import { UtilsService } from './../utils.service';
import { Pipe, PipeTransform } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Pipe({
  name: 'timeleft'
})
export class TimeleftPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {

  }

  transform(value: Date): string {
    const currentTime = new Date();
    const dif = currentTime.getTime() - value.getTime();
    const y = dif/1000/60/60/24/365;
    if (y > 0) return y + 'ans';
    const mois = Math.floor(dif/1000/60/60/24/12);
    if (mois > 0) return mois + 'mois';
    const j = Math.floor(dif/1000/60/60/24);
    if (j > 0) return j + 'j';
    const h = Math.floor((dif/1000/60/60)%24);
    if (h > 0) return h + 'h';
    const min = Math.floor((dif/1000/60)%60);
    if (min > 0) return min + 'min';
    const s = Math.floor((dif/1000)%60);
    if (s > 0) return s + 's';
    return '1s';
  }

}
