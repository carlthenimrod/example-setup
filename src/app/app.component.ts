import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>Example Application</h1>

    <nav>
      <button routerLink="/invoices">Go To Invoices</button>

      <button routerLink="/quotes">Go To Quotes</button>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
