import { Pipe, PipeTransform } from '@angular/core';
import { BacInterface } from '../shared/shared-interfaces';
//import { Observable, map} from 'rxjs';

@Pipe({
  name: 'filterCode'
})
export class FilterCodePipe implements PipeTransform {

  transform(collection: BacInterface.ISelectRasItemCode[], codeType: string): BacInterface.ISelectRasItemCode[] {
    
    if (!collection) {
      return null;
    }

    const result = collection.filter(codes => codes.codeType === codeType);

    return result;

  }
}
