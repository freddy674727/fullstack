Creer le projet ng n NOM_PROJET --routing 2.lancer vsc

installer libraries npm i bootstrap --save npm i jquery --save npm i json-server --save npm i @fortawesome/fontawesome-free --save

configurer les librairies dans le fichier angular.json en ajoutant les scripts et style : "styles": [ "node_modules/bootstrap/dist/css/bootstrap.min.css", "node_modules/@fortawesome/fontawesome-free/css/all.min.css" ],

"scripts": [ "node_modules/jquery/dist/jquery.min.js", "node_modules/bootstrap/dist/js/bootstrap.min.js" ]

supprimer le code html par default

ajouter dans le fichier app module les objets suivant : HttpClientModule (importer de @angular/common/http) FormsModule(importer de '@angular/forms')

lancer l'application ng serve => lance l'application, en option peut changer le port ng lint => test le html avec les fichier specs ng test => test le typescript ng e2e text le lint et le test

commencer par creer les composants dans src/app
    ng c application/ex1

ensuite on code le navbar tout en setup le app routing
    <!--a routerLink="home"... ou [routerLink]="['/home']"

  {path:'', component:HomeComponent},
  {path:'**', component:Error404Component}
