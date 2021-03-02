import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private films = [];

  constructor() {}

  createFilms(): any[] {
    const films = [];
    for (let i = 0; i < 99; i++) {
      films.push({ id: i + 1, name: 'film' + i, category: 'category' + i });
    }
    this.setFilms(films);
    return films;
  }

  private setFilms(films) {
    this.films = films;
  }

  public getFilms() {
    let films = this.films;
    if(!films.length) {
      films = this.createFilms()
    }
    return films;
  }

}
