import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from "../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  form = new FormGroup({
    country: new FormControl(''),
    state: new FormControl(''),
    county: new FormControl(''),
  });

  countries = ['USA', 'Canada'];
  states: string[] = [];
  counties: string[] = [];

  private readonly searchService: SearchService;

  constructor() {
    /*this.form.get('country').valueChanges.subscribe(country => {
      if (country === 'USA') {
        this.states = ['State 1', 'State 2']; // Replace with actual states
      } else if (country === 'Canada') {
        this.states = ['Province 1', 'Province 2']; // Replace with actual provinces
      } else {
        this.states = [];
      }
      this.form.get('state').reset();
      this.counties = [];
    });

    this.form.get('state').valueChanges.subscribe(state => {
      if (state === 'State 1') {
        this.counties = ['County 1', 'County 2']; // Replace with actual counties
      } else if (state === 'State 2') {
        this.counties = ['County 3', 'County 4']; // Replace with actual counties
      } else {
        this.counties = [];
      }
      this.form.get('county').reset();
    });*/
  }

  getStates(country: string) {
    this.searchService.getStates(country).subscribe(states => {
      this.states = states;
    });
  }

  getCounties(state: string) {
    this.searchService.getCounties(state).subscribe(counties => {
      this.counties = counties;
    });
  }

}
