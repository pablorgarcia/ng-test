import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from '../../interfaces/films.interfaces';
import { FilmsService } from '../../service/films.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  title: string = 'listado de peliculas';

  public films: Film[] = [];
  public filmSelected: Film | undefined;

  public unsubscribes: Subscription[] = [];

  constructor(
    private filmService: FilmsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const sub = this.filmService.getFilms().subscribe((films: Film[]) => {
      console.log(films);
      films.map(film => film['link'] = 'detail/' + film.id);
      console.log(films);

      this.films = films;
/*
      // Recorre todo la coleccion de objetos
      films.map(film => film);
      // Realizamos un filtro sobre la coleccion de objetos
      films.filter(film => film.title !== 'Tom & Jerry');
      // Buscamos un objeto en la coleccion
      films.find(film => film.title === 'Tom & Jerry');
*/
    })
    this.unsubscribes.push(sub);
  }

  goToUrl(url: string | undefined):void {
    if (!url) url = '';
    // this.router.navigate([url]); // le puede pasar varios parametros
    this.router.navigateByUrl(url); // te pasa solo un string
  }

  /*
  selectedFilm(id: number | undefined): void {
    this.filmSelected = this.films.find(film => film.id === id);
    // this.filmSelected = this.films.find({id} => id === idFilm);
   }*/

  ngOnDestroy(): void {
    this.unsubscribes.map(sub => sub.unsubscribe());
  }

}
