import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Example } from '../interfaces/example';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'tem-quotes',
  styleUrls: ['./quotes.component.scss'],
  templateUrl: './quotes.component.html'
})
export class QuotesComponent implements OnInit, OnDestroy {
  example!: Example;

  subscription!: Subscription;

  constructor(private _exampleService: ExampleService) { }

  ngOnInit(): void {
    this.subscription = this._exampleService
      .example$()
      .subscribe(example => this.example = example);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
