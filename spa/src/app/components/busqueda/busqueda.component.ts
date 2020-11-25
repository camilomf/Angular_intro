import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      this.termino = params['termino'];
    })
  }

  ngOnInit(): void {
  }
}
