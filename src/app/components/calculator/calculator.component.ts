import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {TableService} from "../table/table.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calcForm: FormGroup;
  neededSumm: number = 0;

  constructor( private tableService: TableService) { }

  ngOnInit() {

    this.calcForm = new FormGroup({
      'neededSumm': new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.pattern(new RegExp('^[0-9]+$')),
      ])
    });
  }

  onSubmit(){
    this.tableService.neededSumm$.next(parseInt(this.calcForm.value.neededSumm));
  }

}
