import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { BankingRoutingModule } from '../banking.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BankingRoutingModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent
  ],
})
export class BankingModule { }
