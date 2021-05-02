import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../interfaces/films.interfaces';

// import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  // @Input() title: string | undefined;

  public film: Film | any;

  constructor(
    private route: ActivatedRoute
  ) // private filmService: FilmsService
  {}

/*
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
*/

  ngOnInit(): void {
    // const params = this.route.snapshot.params;
    // const idFilm = params.id;
    // this.filmService.getFilmDetail(idFilm).subscribe((film: Film) => {
    // this.film = film;
    // });

    // Usamos el resolve de la ruta
    this.route.data.subscribe(({ film }) => {
      this.film = film;
    });
  }

  toggleFavourite(): void {
    this.film.favourite = !this.film.favourite;
  }
}
