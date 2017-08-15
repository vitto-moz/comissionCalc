import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class TableService {
  public neededSumm$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

}
