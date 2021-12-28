import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import * as moment from 'moment';

import { Example } from '../interfaces/example';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  example$(): Observable<Example> {
    return interval(1000)
      .pipe(
        map(i => this._createExample(i))
      );
  }

  private _createExample(i: number): Example {
    return {
      currentCount: i,
      currentTime: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
