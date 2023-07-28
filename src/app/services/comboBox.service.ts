import { BacEnum } from "../shared/shared-enums";
import { BacInterface} from "../shared/shared-interfaces";

import { Injectable } from "@angular/core";
//import { Subject } from "rxjs";
//import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class ComboBoxService {
 // constructor(){}


   yearForSelect(yearsBack: number) {

    // set array to 1 for current year, and then additional years back
    const arrNumbers = new Array(1 + yearsBack);

    const currentYear = new Date().getFullYear();

    arrNumbers[0] = currentYear;

    for (let i = 1; i < arrNumbers.length; i++) {
      
      arrNumbers[i] = currentYear - i;
         
    }

    return arrNumbers;

   }

  numberReturnOneToN(lastNumber: number){
   
    lastNumber = lastNumber + 1;
    const arrNumbers = new Array(lastNumber);

    for (let i = 0; i < arrNumbers.length; i++) {
      arrNumbers[i] = i;
         
    } 
    arrNumbers.shift();
      
    return arrNumbers;

  }

  testWorkMonths(monthsBack: number,
    includeCurrentMonth: boolean,
    formatTypeKey: BacEnum.ComboDateFormats,
    formatTypeDisplay: BacEnum.ComboDateFormats) {
    
    const result: BacInterface.IDropdownItem[] = new Array();
    
    const currentDate = new Date();
  
    if (includeCurrentMonth) {
      currentDate.setDate(1); // 1 will result in the first day of the month
      
    } else    {

      currentDate.setDate(0); // 0 will result in the last day of the previous month
      currentDate.setDate(1); // 1 will result in the first day of the month
    }

   // let seed = new Date();
   // seed = currentDate;
    const seed = currentDate;

    for (let i = 1; i < monthsBack; i++) {

      let addDate = new Date();

      if (i === 1) {
        addDate = seed;

      } else {
        addDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));

      }

      result.push({index: i - 1,
                  key:this.formatDate(addDate, formatTypeKey),
                  display: this.formatDate(addDate, formatTypeDisplay) });
      

    }

    return result;



  }

  workMonths(monthsBack: number,
          includeCurrentMonth: boolean,
          formatType: BacEnum.ComboDateFormats) {
     
    
    const returnArray = new Array();
    const currentDate = new Date();
  
    if (includeCurrentMonth) {
        currentDate.setDate(1); // 1 will result in the first day of the month
      
    } else    {

        currentDate.setDate(0); // 0 will result in the last day of the previous month
        currentDate.setDate(1); // 1 will result in the first day of the month
    }

    let seed = new Date();
    seed = currentDate;

    for (let i = 1; i < monthsBack; i++) {

      let addDate = new Date();

      if (i === 1) {
        addDate = seed;

      } else {
        addDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));

      }

      returnArray.push(this.formatDate(addDate, formatType));

    }
    return returnArray;

  }
      
   private formatDate(inputDate: Date,
          formatType: BacEnum.ComboDateFormats) {

     let day;
     let month;

      day = inputDate.getDate();
      month = inputDate.getMonth() + 1;
      const year = inputDate.getFullYear();

      day = day.toString().padStart(2, '0');
      month = month.toString().padStart(2, '0');

      switch (formatType) {
        case BacEnum.ComboDateFormats.MonthYear:

          return `${month}/${year}`;

        case BacEnum.ComboDateFormats.MonthDayYear:

          return `${month}/${day}/${year}`;
        case BacEnum.ComboDateFormats.SqlMonthDayYear:
          return `${month}-${day}-${year}`;
        default:

            return `${month}/${day}/${year}`;
      }


   }
  
}
