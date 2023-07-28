import { Component, Inject, OnInit, OnDestroy, HostListener } from "@angular/core";
import { HourService } from "../services/hour.service";
import { Hour } from "../../models/hour"
import { HttpClient } from '@angular/common/http';
import { ComboBoxService } from "../services/comboBox.service";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { DatePipe } from '@angular/common';

//import {CodeService } from '../services/code.service'
//import { RasCode } from "../../models/RasCode";
//import {BacInterface } from '../shared/shared-interfaces'
//import { BacInterface} from "../shared/shared-interfaces";
//import { TestComboComponent } from '../test-combo/test-combo.component';
//import { SharedModule } from '../shared/sharedModule';
//import { Injectable } from '@angular/core';  
//import { Subject } from 'rxjs';


@Component({
  selector: "app-fetch-hour",
  templateUrl: "./fetch-hour.component.html",
  styleUrls: ["./fetch-hour.component.css"],
  providers: [ComboBoxService, { provide: "BASE_URL", useFactory: getBaseUrl }]
})
export class FetchHourComponent implements OnInit  {

    private readonly hourService: HourService;
    subscription: Subscription;
    hourList?: Hour[] = [];
    myForm: FormGroup;
    disableAppendButton: boolean;
    public screenWidth: any;
    public screenHeight: any;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private readonly comboService: ComboBoxService,
    private readonly formBuilder: FormBuilder,
    private datePipe: DatePipe) {
   
    this.hourService = new HourService(http, baseUrl);
    
    this.myForm =
      new FormGroup({
        companyId: new FormControl('', [Validators.required, 
          Validators.pattern("^[0-9]{1,6}$")]),
        workMonthControl: new FormControl("", [Validators.required]),

        reportIdGroup: new FormGroup({
          reportId: new FormControl("", [Validators.required,
            Validators.pattern("^[0-9]{1,7}$")])
        })
      });
 }

  ngOnInit() {
    this.disableAppendButton = true;
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }





  /*------------------------------------------
      call checkAllCheckBox() function
   --------------------------------------------*/
  checkAllCheckBox(how: boolean) {
   // this.hourList.forEach(x => x.isChecked = event.target.checked);

   if (this.hourList.length > 0) {
    // this.hourList.forEach(x => {if (x.isChecked ===!how) (x.isChecked = how)});

    this.hourList.forEach(x => {
      if (how) {
        x.isChecked = how;
        x.kAmount = x.kHours * x.kRate;
        x.flex = x.kHours * x.flexRate;
      } else {
        x.isChecked = how;
        x.kAmount = 0.00;
        x.flex = 0.00;
      }
    }
    );

     this.disableAppendButton = !how;
   }
 }
  /*------------------------------------------
  call isAllCheckBoxChecked() function
   --------------------------------------------*/
  isAllCheckBoxChecked() {
    return this.hourList.every(p => p.isChecked);
  }
  /*------------------------------------------
  call onCheckboxChange
 --------------------------------------------*/
  onCheckboxChange(event: any) {

    const which = event.target.checked;

    if (which === true) {

      this.disableAppendButton = !which;

    } else {

      const numberChecked = this.hourList.filter(item => item.isChecked).length;

      if (numberChecked >= 1) {
        this.disableAppendButton = false;
      } else {
        this.disableAppendButton = true;
      };
    }

    this.resultChecked(event.target.value).map(item => {
      item.kAmount = item.kHours * item.kRate;
      item.flex = item.kHours * item.flexRate + 1;
    });

    //this.hourList.filter(item => item.mhrsId = event.target.value).map(itemz => {
    //  itemz.kAmount = itemz.kHours * itemz.kRate;
    //  itemz.flex = itemz.kHours * itemz.flexRate;
    //});

   //this.checkResult.map(item => {
   //  item.kAmount = item.kHours * item.kRate;
   //  item.flex = item.kHours * item.flexRate + 1;
   //});
    
  }

  

  /*comboChangeEvent*/
  comboChangeEvent(event: any) {
    
    this.m.workMonthControl.markAsTouched();
    this.m.workMonthControl?.setValue(event.target.value);

  }

  private  resultChecked(hourId: number) {

    var y: number = +hourId;
     // return this.hourList.filter(item =>  item.mhrsId = hourId);
      return this.hourList.filter(item =>  item.mhrsId === y);
  }

  get result() {

    return this.hourList.filter(item => item.isChecked);

 }
  
  get r() {

    return ((this.myForm.get("reportIdGroup") as FormGroup).controls);
  }
  

  get m(){
    
    return this.myForm.controls;
  }

  
 

  getHoursClick(): void {
    

   //let myDate = this.m.workMonthControl.value;

    //let x = this.datePipe.transform(myDate, 'MM-dd-YYYY'); //whatever format you need.

    this.getHours( this.m.companyId.value, this.m.workMonthControl.value);

    //  const str = '2022-09-01';
    // const ans = confirm('getHoursClick' );

    //  const date = new Date(str);
    //5710834


  }
  private getHours(employerAccount: string, workMonth: string) {
    
    
    this.subscription = this.hourService.getHours(employerAccount,workMonth).subscribe(
      (data?: Hour[]) => this.hourList = data);
   
  }


  getHoursByReportIdClick(): void {

   // alert(this.m.workMonthControl.value);
    // alert(this.selectedWorkMonth);
    //this.comboSubscription$ = this.comboService.comboSelectedItem$.subscribe(
    //  (x: string) => (this.receivedComboItem = x)
    //);


    // alert(this.receivedComboItem);

   //  const str = '2022-09-01';
   // const ans = confirm('getHoursClick' );

   //  const date = new Date(str);
    //5710834
    this.getHoursByReportId(this.r.reportId.value);


  }
  private getHoursByReportId( reportId: number) {
    //employerAccount: string, workMonth: Date,
    //this.subscription = this.hourService.getHours(employerAccount, workMonth, reportId).subscribe(
    //  (data?: Hour[]) => this.hourList = data);

    this.subscription = this.hourService.getHoursByReportId(reportId).subscribe(
      (data?: Hour[]) => this.hourList = data);


  }

  //delete(hourId:number) {
  //  const ans = confirm('Do you want to delete employee with Id: ' + hourId);
  //  if (ans) {
  //    this.hourService.deleteEmployee(hourId).subscribe(() => {
  //      this.getEmployees();
  //    }, error => console.error(error));
  //  }
  //}


  ngOnDestroy() {
    this.subscription.unsubscribe();
    alert("Unsubscribed from Hours");
  }

  
  }





export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

 


