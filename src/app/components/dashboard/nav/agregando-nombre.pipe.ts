
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agregandoNombre'
})
export class AgregandoNombrePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return ' - ' + 'Escuela AV';
  }

}