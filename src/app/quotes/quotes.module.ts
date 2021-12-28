import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';

@NgModule({
  declarations: [
    QuotesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuotesRoutingModule
  ]
})
export class QuotesModule { }
