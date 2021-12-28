import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Example } from '../interfaces/example';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'tem-invoices',
  styleUrls: ['./invoices.component.scss'],
  templateUrl: './invoices.component.html'
})
export class InvoicesComponent {
  example$!: Observable<Example>;

  constructor(private _exampleService: ExampleService) { }

  ngOnInit(): void {
    this.example$ = this._exampleService.example$();
  }
}
