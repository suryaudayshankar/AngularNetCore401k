import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
//import { Component, EventEmitter, Inject, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef  } from '@angular/core';
//import { Observable, map, tap, findIndex, filter, Subscription } from 'rxjs';
 import { Observable, of, partition, tap, map} from 'rxjs';
import { CodeService } from '../services/code.service';
import { BacInterface } from '../shared/shared-interfaces';
import { Input, Output } from '@angular/core';
 


//import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

//https://stackblitz.com/edit/angular-1xhjvj?file=src%2Fapp%2Faddress-form.component.ts

//https://stackblitz.com/edit/angular-custom-select-component?file=app%2Fcustom-select.component.ts
//https://stackblitz.com/edit/angular-control-value-accessor-simple-example-tsmean?file=src%2Fapp%2Fcustom-input%2Fcustom-input.component.ts
@Component({
  selector: 'app-select-code',
  templateUrl: './select-code.component.html',
 styleUrls: ['./select-code.component.css'],
  providers: [
    {
      provide: "BASE_URL", useFactory: getBaseUrl
    }
   //, {
   //   provide: NG_VALUE_ACCESSOR,
   //   useExisting: forwardRef(() => SelectCodeComponent),
   //   multi: true
   // }
  ]
})
export class SelectCodeComponent implements OnInit  {

   // codeItems$: Observable<BacInterface.ISelectRasItemCode[]>;
 //  private readonly codeService: CodeService;

  @Input() codeValue: string;
  @Input() codeItems: BacInterface.ISelectRasItemCode[] = [];
  @Output() currentValueChange = new EventEmitter();
  currentValue: string;
  
  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string ) {
     
    // this.codeService = new CodeService(http, baseUrl);
  }
  
  ngOnInit(): void {
   // this.codeItems$ = this.codeService.getCodeList(this.codeValue);
    // this.versionX();

  }
 
  //private versionX() {
  //  //https://stackblitz.com/edit/angular-pipe-groupby?file=src%2Fapp%2Fgroup-by.pipe.ts
  //  let  codeBr: Array<BacInterface.ISelectRasItemCode> = [];
  //  let  codeMc: Array<BacInterface.ISelectRasItemCode>= [];
  //  this.codeItems$
  //    .pipe(
  //      tap((items: BacInterface.ISelectRasItemCode[]) => {
  //        items.forEach(item => {
  //          if (item.codeType === 'BR') {

  //             codeBr.push(item);

  //          } else if (item.codeType === 'MC') {

  //             codeMc.push(item);
  //          }
  //        });
  //      })
  //    );
  //  //.subscribe(res => {
  //  //  console.log('vX cabbages', this.codeBr);
  //  //  console.log('vX kings', this.codeMc);
  //  //}
  //  // );
  //}

  public comboChangeEvent(event: any) {

    this.currentValue = event.target.value;
    //this.currentValueChange.emit(this.currentValue);
    this.currentValueChange.emit(event);
  }

}
 
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
