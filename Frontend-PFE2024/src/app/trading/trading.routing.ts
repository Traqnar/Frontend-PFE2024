import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// Importation des composants du module Trading


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
    ]
  }
  // D'autres routes peuvent être ajoutées ici
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule { }
