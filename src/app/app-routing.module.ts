import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListeArticlesComponent } from './pages/liste-articles/liste-articles.component';
import { GestionUtilisateursComponent } from './pages/gestion-utilisateurs/gestion-utilisateurs.component';
import { FormulaireContactComponent } from './pages/formulaire-contact/formulaire-contact.component';

const routes: Routes = [
  { path: 'liste-articles', component: ListeArticlesComponent },
  { path: 'administration/dashboard', component: DashboardComponent },
  {
    path: 'administration/gestion-utilisateurs',
    component: GestionUtilisateursComponent,
  },

  { path: 'contact', component: FormulaireContactComponent },
  {
    path: 'administration',
    redirectTo: 'administration/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'liste-articles',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
