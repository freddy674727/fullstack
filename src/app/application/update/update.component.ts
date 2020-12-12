import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { MenuService } from '../crud/menu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id: number;
  menu: Menu;
  validMessage: string;
  menuUpdateForm: FormGroup;

  constructor(
    private service: MenuService,
    private routeur: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data) => {
      this.menu = data;
    });
    this.menuUpdateForm = new FormGroup({
      nom: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2) ,Validators.maxLength(30)]),
      prix: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(5) ,Validators.maxLength(50)]),
      ingredients: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(5) ,Validators.maxLength(100)]),
      saveur: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required])
    });
  }

  
  get myController() {
    return this.menuUpdateForm.controls;
  }

  updateMenu() {
    if (this.menuUpdateForm.valid) {
      this.service.put(this.id, this.menuUpdateForm.value).subscribe(
        (data) => {
          this.routeur.navigateByUrl('/crud');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.validMessage="Remplissez le formulaire correctement avant de modifier svp"
    }
  }
}
