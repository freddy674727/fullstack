import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { MenuService } from '../crud/menu.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  menuForm = new FormGroup ({
    nom: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2) ,Validators.maxLength(30)]),
    prix: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(5) ,Validators.maxLength(50)]),
    ingredients: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(5) ,Validators.maxLength(100)]),
    saveur: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required])
  })

  Menu : Menu;
  validMessage: string ="";

  constructor(private service: MenuService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.menuForm.valid){
      this.service.post(this.menuForm.value).subscribe(data => {
        this.menuForm.reset();
        this.router.navigateByUrl('/crud');
      })
    } else {
      this.validMessage="Remplissez le formulaire correctement avant d'envoyer svp"
    }
  }
}
