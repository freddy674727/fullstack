import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tutoriels',
  templateUrl: './tutoriels.component.html',
  styleUrls: ['./tutoriels.component.css'],
})
export class TutorielsComponent implements OnInit {
  myParam: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.myParam = params.id;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
