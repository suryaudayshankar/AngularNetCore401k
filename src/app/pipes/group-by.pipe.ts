import { Pipe, PipeTransform } from '@angular/core';
//import { filter } from 'rxjs/operators';
import { BacInterface } from '../shared/shared-interfaces';
import { Observable, map} from 'rxjs';


////https://stackblitz.com/edit/angular-pipe-groupby?file=src%2Fapp%2Fapp.component.ts

@Pipe({
  name: 'filterCodesBy'
})
/*
Filter and Observable collection of BacInterface.ISelectRasItemCode[] using the codeType
Parameters: collection Observable<BacInterface.ISelectRasItemCode[]> the full collection to filter
            codeType: string => the code to filter on, ie 'BR' or 'MC'
returns Observable collection of BacInterface.ISelectRasItemCode[] filtered by the codeType parameter.
*/
export class GroupByPipe implements PipeTransform {
  transform(collection:  Observable<BacInterface.ISelectRasItemCode[]>, codeType: string): Observable<BacInterface.ISelectRasItemCode[]> {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if(!collection) {
      return null;
    }
    
    let filteredCode = collection
      .pipe(
        map(codes => codes
          .filter(codes => codes.codeType === codeType)) 
      );
    
    return filteredCode;
  
  }
}
