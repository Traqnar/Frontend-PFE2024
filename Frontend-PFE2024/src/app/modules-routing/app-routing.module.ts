import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'banking',
    loadChildren: () => import('../banking/banking-module/banking.module').then(m => m.BankingModule)
  },
  {
    path: 'trading',
    loadChildren: () => import('../trading/trading.routing').then(m => m.TradingRoutingModule)
  },
  {
    path: '',
    redirectTo: '/banking',
    pathMatch: 'full'
  },
  // D'autres routes de niveau application peuvent être ajoutées ici
  {
    path: '**',
    redirectTo: '/banking'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
