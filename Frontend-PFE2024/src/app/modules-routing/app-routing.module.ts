import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'banking', loadChildren:() => import('../banking/banking.routing').then(m => m.BankingRoutingModule) }
    ]
  },
  {
    path: '',
    children: [
      { path: 'trading', loadChildren:() => import('../trading/trading.routing').then(m => m.TradingRoutingModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
