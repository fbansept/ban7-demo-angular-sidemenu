import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionUtilisateursComponent } from './pages/gestion-utilisateurs/gestion-utilisateurs.component';
import { ListeArticlesComponent } from './pages/liste-articles/liste-articles.component';
import { SidebarFiltresArticlesComponent } from './sidebar/sidebar-filtres-articles/sidebar-filtres-articles.component';
import { SidebarAdministrationComponent } from './sidebar/sidebar-administration/sidebar-administration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormulaireContactComponent } from './pages/formulaire-contact/formulaire-contact.component';

@NgModule({
  declarations: [
    GestionUtilisateursComponent,
    ListeArticlesComponent,
    SidebarFiltresArticlesComponent,
    SidebarAdministrationComponent,
    DashboardComponent,
    AppComponent,
    FormulaireContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
