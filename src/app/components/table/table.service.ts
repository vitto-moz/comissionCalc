import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class TableService {
  public neededSumm$: Subject<number> = new Subject();

  constructor() { }

}
