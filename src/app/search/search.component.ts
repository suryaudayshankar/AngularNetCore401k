import { Component, Inject, OnInit, OnDestroy, HostListener } from "@angular/core";
import { ComboBoxService } from "../services/comboBox.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ComboBoxService, { provide: "BASE_URL", useFactory: getBaseUrl }]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


