import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() neededSumm: number;
  tableValues: any[];
  warehouseK =  0.0005;

  constructor() { }

  ngOnInit() {
    this.tableValues = [
      this.getPeriodData(100, 1)
    ];

    console.log('this.tableValues ', this.tableValues);

  }

  getPeriodData(summ, periodNumber){

    let price =  summ / 0.6;


    let commission = (() => {
      let posssibleCommission  = price * 0.4;
      return posssibleCommission < 49 ? 49 : posssibleCommission;
    })();

    let earnedSumm = (() => {
      let possibleEarnedSumm = price - commission;
      return possibleEarnedSumm < 0 ? 0 : possibleEarnedSumm;
    })();

    let warehouseSumm = ((period) => {
      switch (period) {
        case 1:
          return 0;
        case 2:
          return this.getWareHouseFork(price, 21, 40);
        case 3:
          return this.getWareHouseFork(price, 41, 60);
        case 4:
          return this.getWareHouseFork(price, 61, 80);
        case 5:
          return this.getWareHouseFork(price, 81, 100);
      }

    })(periodNumber);

    return {
      price: price,
      commission: commission,
      earned: earnedSumm,
      warehouseSumm: warehouseSumm
    }
  }

  getWareHouseFork(price, dayStart, dayEnd){
    return {
      min: price * this.warehouseK * dayStart,
      max: price * this.warehouseK * dayEnd,
    };
  }



}
