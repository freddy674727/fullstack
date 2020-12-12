import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  listMenu: Menu[];

  public headElements = [
    'Id',
    'Nom',
    'Prix',
    'Description',
    'Ingredients',
    'Saveur',
    'Type',
  ];

  constructor(private service: MenuService) {}

  ngOnInit(): void {
    this.getAllMenu();
  }

  getAllMenu(): void {
    this.service.getAll().subscribe((data) => (this.listMenu = data));
  }

  delete(id: number) {
    if (window.confirm('Etes-vous sur de vouloir supprimer?')) {
      this.service.deleteById(id).subscribe((data) => {
        this.listMenu = this.listMenu.filter((element) => element.id !== id);
      });
    }
  }
}
