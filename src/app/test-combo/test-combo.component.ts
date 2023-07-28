import { Component, OnInit} from "@angular/core";
//import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ComboBoxService } from "../services/comboBox.service";
import { BacEnum } from "../shared/shared-enums";

//import { Observable, Subscription } from "rxjs";
//import { Injectable } from '@angular/core';  
//import { Subject } from 'rxjs';
//import { BacInterface} from "../shared/shared-interfaces";

@Component({
  selector: "app-test-combo",
  templateUrl: "./test-combo.component.html",
  styleUrls: ["./test-combo.component.css"],
  providers: [ComboBoxService]
})
export class TestComboComponent implements OnInit {

  workMonths = new Array();
 // @Output() comboOnChange = new EventEmitter();
 constructor(private readonly comboService: ComboBoxService) { }
          
   
  ngOnInit(): void {
    
    this.workMonths = this.comboService.testWorkMonths(18,
      false,
      BacEnum.ComboDateFormats.SqlMonthDayYear,
      BacEnum.ComboDateFormats.MonthYear);

  }

  //onChange() {
    
    
  //  this.comboOnChange.emit();
  //}
  };
 
