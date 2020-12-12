import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { CrudComponent } from './application/crud/crud.component';
import { Error404Component } from './application/error404/error404.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { UpdateComponent } from './application/update/update.component';
import { AfficherComponent } from './application/afficher/afficher.component';

const routes: Routes = [
  {path:'update/:id', component:UpdateComponent},
  {path:'afficher/:id', component:AfficherComponent},
  {path:'tutoriels',
    children:[
      {path:':id', component:TutorielsComponent}
    ]},
  {path:'crud', component:CrudComponent},
  {path:'fun', component:FunComponent},
  {path:'contact', component:ContactComponent},
  {path:'formulaire', component:FormulaireComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
