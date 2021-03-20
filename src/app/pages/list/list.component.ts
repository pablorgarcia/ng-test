import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/films.interfaces';
import { FilmsService } from '../../service/films.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title: string = 'listado de peliculas';

  public films: Film[] = [];

  constructor(
    private filmService: FilmsService,
  ) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films: Film[]) => {
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
  }

}
