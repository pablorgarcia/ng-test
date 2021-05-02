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

  private static getBaseUrl(): string {
    return 'https://api.themoviedb.org/3/movie/';
  }

  private static getDefaultParams(): { api_key: string, languaje: string } {
    return {
      api_key: '0e246cd8d692477cf3059d0f1b6b2f1e',
      languaje: 'en-US'
    }
  }

  private static urlGetFilms(): string {
    return FilmsService.getBaseUrl() + 'popular';
  }

  private static urlGetFilmDetail(idFilm: string | number): string {
    return FilmsService.getBaseUrl() + idFilm;
  }

  public getFilms(): Observable<Film[]> {
    const params: any = { ...FilmsService.getDefaultParams(), page: 1 };

    return new Observable(subs => {
      if(!this.getLocalFilm().length) {
        this.http.get(FilmsService.urlGetFilms(), { params } ).subscribe((film:any) => {
          this.setFilms(film.results);
          subs.next(film.results);
        } )
      } else {
        subs.next(this.getLocalFilm());
      }
    })

  }

  public getFilmDetail(id: string | number | any): Observable<any> {
    const params = FilmsService.getDefaultParams();
    return this.http.get(FilmsService.urlGetFilmDetail(id), { params })
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
