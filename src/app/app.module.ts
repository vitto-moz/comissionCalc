import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TableComponent } from './components/table/table.component';
import { TableService } from "./components/table/table.service";
import { CustomCurrencyPipe } from './components/table/custom-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TableComponent,
    CustomCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
