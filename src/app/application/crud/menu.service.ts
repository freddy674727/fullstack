import { Injectable } from '@angular/core';
import { GenericService } from '../../services/generic-service';
import { Menu } from '../../models/menu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends GenericService<Menu, number>{
  
  constructor(http: HttpClient) { 
    super(http, "http://localhost:5959/myApi");
  }
}
