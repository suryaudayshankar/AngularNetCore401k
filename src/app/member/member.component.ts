import { Component, Inject,  OnDestroy,  OnInit  } from '@angular/core';
//import { Observable } from 'rxjs/internal/Observable';
 import {  Subscription } from 'rxjs';
 import {CodeService } from '../services/code.service'
//import { RasCode } from '../../models/RasCode';
 import {BacInterface } from '../shared/shared-interfaces'
//import { SelectCodeComponent } from '../select-code/select-code.component';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators,ReactiveFormsModule  } from "@angular/forms";


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [{ provide: "BASE_URL", useFactory: getBaseUrl }]
})
export class MemberComponent implements OnInit, OnDestroy  {

    memberForm: FormGroup;
    codeItems?: BacInterface.ISelectRasItemCode[] = [];
    private readonly codeService: CodeService;
    subscription: Subscription; 

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {

    this.codeService = new CodeService(http, baseUrl);
  }

   
  ngOnInit(): void {


   this.subscription = this.codeService.getCodeList('BR,MC,ME').subscribe(
      (data?: BacInterface.ISelectRasItemCode[]) =>  this.codeItems  = data);

    this.memberForm =
      new FormGroup({
       
        brCodeControl: new FormControl("", [Validators.required]),
        mcCodeControl: new FormControl("",[Validators.required])
        
      });

  }
  dropdownBrValueChanged($event: any) {

      this.m.brCodeControl.markAsTouched();
      this.m.brCodeControl?.setValue($event.target.value);
    
  }
  dropdownMcValueChanged($event: any) {
    
    this.m.mcCodeControl.markAsTouched();
    this.m.mcCodeControl?.setValue($event.target.value);
   
  }
  comboChangeEvent($event: any) {

  }
  get m(){
    
     return this.memberForm.controls;
     
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    alert("Unsubscribed from RAS Code");
  }

}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}



