import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { MenuService } from '../crud/menu.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css'],
})
export class AfficherComponent implements OnInit {
  id: number;
  menu: Menu;
  afficheForm: FormGroup;

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
    this.afficheForm = new FormGroup({
      nom: new FormControl(''),
      prix: new FormControl(''),
      description: new FormControl(''),
      ingredients: new FormControl(''),
      saveur: new FormControl(''),
      type: new FormControl(''),
    });
  }

  affichage() {
    this.service.put(this.id, this.afficheForm.value).subscribe(
      (data) => {
        this.routeur.navigateByUrl('/crud');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
