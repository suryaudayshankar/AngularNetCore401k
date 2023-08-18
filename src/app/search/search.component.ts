import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from "../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent {
  form = new FormGroup({
    country: new FormControl(''),
    state: new FormControl(''),
    county: new FormControl(''),
    city: new FormControl(''),
    postalCode: new FormControl(''),    
    local: new FormControl('') 
  });

  countries = ['USA', 'Canada'];
  states: string[] = [];
  counties: string[] = [];
  results: string[] = [];
  showResults = false;

  constructor(private searchService: SearchService) {
    
  }

  getStates(country: string) {
    this.states = [];
    this.searchService.getStates(country).subscribe(states => {
      this.states = states;
    });
  }

  getCounties(state: string) {
    this.counties = [];
    this.searchService.getCounties(state).subscribe(counties => {
      this.counties = counties;
    });
  }

  getResults() {
/*    const criteria = {
      country: this.form.controls['country'].value,
      state: this.form.controls['state'].value,
      county: this.form.controls['county'].value,
      city: this.form.controls['city'].value,
      postalCode: this.form.controls['postalCode'].value,
      local: this.form.controls['local'].value
    };

    this.searchService.getResults(criteria).subscribe(data => {
      this.results = data;
      this.showResults = true;
    });
*/

    class Criteria {
      country: string;
      state: string;
      county: string;
      city: string;
      postalCode: string;
      local: string;
    }



    var criteria: Criteria = {
      country: this.form.controls['country'].value,
      state: this.form.controls['state'].value,
      county: this.form.controls['county'].value,
      city: this.form.controls['city'].value,
      postalCode: this.form.controls['postalCode'].value,
      local: this.form.controls['local'].value
    };

    this.searchService.getResults(criteria).subscribe(data => {
      this.results = data;
      this.showResults = true;
    });

  }

  resetForm() {
    this.form.reset();
    this.states = [];
    this.counties = [];
  }


}
