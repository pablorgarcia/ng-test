import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/films.interfaces';


@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private films = [];

  constructor(
    private http: HttpClient
  ) {}

  private static urlGetFilms(): string {
    return 'https://api.themoviedb.org/3/movie/popular?api_key=0e246cd8d692477cf3059d0f1b6b2f1e&language=en-US&page=1';
  }

  private static urlGetFilmDetail(idFilm: string | number): string {
    return 'https://api.themoviedb.org/3/movie/' + idFilm + '?api_key=0e246cd8d692477cf3059d0f1b6b2f1e&language=en-US';
  }

  public getFilms(): Observable<Film[]> {

    return new Observable(subs => {
      if(!this.getLocalFilm().length) {
        this.http.get(FilmsService.urlGetFilms()).subscribe((film:any) => {
          this.setFilms(film.results);
          subs.next(film.results);
        } )
      } else {
        subs.next(this.getLocalFilm());
      }
    })

  }

  public getFilmDetail(id: string | number): Observable<any> {
    return this.http.get(FilmsService.urlGetFilmDetail(id))
  }

  // Guardamos la ocleccion de peliculas em local
  private setFilms(films: Film[]): void {
    this.films = films;
  }

  // Definimos una funcion que nos devuelva las peliculas en local
  private getLocalFilm(): Film[] {
    return this.films;
  }

}
