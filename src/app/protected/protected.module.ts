import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { SellComponent } from './sell/sell.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CustomerComponent, SellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'sell', component: SellComponent },
      { path: 'customer', component: CustomerComponent },
    ]),
    SharedModule,
  ],
})
export class ProtectedModule {}
