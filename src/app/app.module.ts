import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberComponent } from './member/member.component';
import { HoursComponent } from './hours/hours.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
//import { ReportsComponent } from './reports/reports.component';

import { FetchHourComponent } from './fetch-hour/fetch-hour.component';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService } from '@syncfusion/ej2-angular-grids';
import { TestComboComponent } from './test-combo/test-combo.component';
import { SelectCodeComponent } from './select-code/select-code.component';
 
import { GroupByPipe } from './pipes/group-by.pipe';
import { FilterCodePipe } from './pipes/filter-code.pipe';
import { DatePipe } from '@angular/common';
import { SsnPipe } from './pipes/ssn.pipe';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberComponent,
    HoursComponent,
    HomeComponent,
    FetchHourComponent,
    TestComboComponent,
    SelectCodeComponent,
    GroupByPipe,
    FilterCodePipe,
    SsnPipe,
    SearchComponent,
    InfoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    GridModule
  ],
  providers: [PageService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
