import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomHotel'
})
export class NomHotelPipe implements PipeTransform {

  transform(nom:string): string {
    return '**'+nom+'**';
    }

}
