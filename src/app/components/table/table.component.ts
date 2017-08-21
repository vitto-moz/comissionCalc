import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {TableService} from "./table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() neededSumm: number;
  tableValues: any[] = [];
  warehouseK: number =  0.0005;
  price: number;
  showLoader: boolean = false;

  constructor( private tableService: TableService) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.tableService.neededSumm$
      .map(summ => {
        this.showLoader = true;
        return summ;
      })
      .delay(1000)
      .subscribe(
      val => {
        this.tableValues = [];
        this.calculateTable(val);
        this.showLoader = false;
      }
    );
  }

  calculateTable(neededSumm){
    for (let i = 1; i < 5 ; i++) {
      this.tableValues.push(this.getPeriodData(neededSumm, i))
    }
  }

  getPeriodData(summ, periodNumber){
    let initialPrice = summ / 0.6;

    this.price =  ((period) => {

      switch (period) {
        case 1:
          return initialPrice ;
        case 2:
          return initialPrice * 0.9;
        case 3:
          return initialPrice * 0.9 * 0.8;
        case 4:
          return initialPrice * 0.9 * 0.8 * 0.8;
        case 5:
          return initialPrice * 0.9 * 0.8 * 0.8;
      }
    })(periodNumber) ;


    let commission = (() => {
      let posssibleCommission  = this.price * 0.4;
      return posssibleCommission < 49 ? 49 : posssibleCommission;
    })();

    let earnedSumm = (() => {
      let possibleEarnedSumm = this.price - commission;
      return possibleEarnedSumm < 0 ? 0 : possibleEarnedSumm;
    })();

    let warehouseInfo = ((period) => {
      switch (period) {
        case 1:
          return this.getWareHouseFork(initialPrice, 1, 20);
        case 2:
          return this.getWareHouseFork(initialPrice, 21, 40);
        case 3:
          return this.getWareHouseFork(initialPrice, 41, 60);
        case 4:
          return this.getWareHouseFork(initialPrice, 61, 80);
        case 5:
          return this.getWareHouseFork(initialPrice, 81, 100);
      }

    })(periodNumber);

    return {
      price: this.price,
      commission: commission,
      earned: earnedSumm,
      warehouseInfo: warehouseInfo
    }
  }

  getWareHouseFork(price, dayStart, dayEnd){
    return {
      dayStart: dayStart,
      dayEnd: dayEnd,
      min: dayStart === 1 ? 0 : price * this.warehouseK * dayStart,
      max: dayStart === 1 ? 0 : price * this.warehouseK * dayEnd,
    };
  }



}
