import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SSN'
})
export class SsnPipe implements PipeTransform {
  transform(value: string | number, fund: 'U' | 'C', secureFormat: boolean): string {
    let tempVar = '';
    let zeroFilled = '000000000';

    if (typeof value == 'number') {
      tempVar = (zeroFilled + value.toString()).slice(-9);
    }
    else {
      //it's string
      tempVar = (zeroFilled + value.toString()).slice(-9);
    }

    if (fund == 'C') {
      if (secureFormat) {
        //XXX-XXX-123
        return 'XXX-XXX-' + tempVar.slice(-3);
      } else {
        //000-000-000
        return tempVar.substring(0, 3) + "-" + tempVar.substring(3, 6) + "-" + tempVar.slice(-3);
      }

    } else { //its US
      if (secureFormat) {
        //XXX-XX-1234
        return 'XXX-XX-' + tempVar.slice(-4);
      } else {
        //000-00-000
        return tempVar.substring(0, 3) + "-" + tempVar.substring(3, 5) + "-" + tempVar.slice(-4);
      }
    }
  }
} 
