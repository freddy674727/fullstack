import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { HttpClientModule } from '@angular/common/http' 
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { Error404Component } from './application/error404/error404.component';
import { HomeComponent } from './application/home/home.component';
import { CrudComponent } from './application/crud/crud.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { UpdateComponent } from './application/update/update.component';
import { AfficherComponent } from './application/afficher/afficher.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    NavbarComponent,
    FooterComponent,
    Error404Component,
    HomeComponent,
    CrudComponent,
    FunComponent,
    ContactComponent,
    TutorielsComponent,
    UpdateComponent,
    AfficherComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule //reactive
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
