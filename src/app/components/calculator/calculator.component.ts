import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calcForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.calcForm = new FormGroup({
      'neededSumm': new FormControl('', Validators.required),
    });
  }

  onSubmit(){

  }

}
