import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../interfaces/films.interfaces';
import { FilmsService } from '../../service/films.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public film: Film | undefined;

  constructor(
    private router: ActivatedRoute,
    private filmService: FilmsService
  ) { }

  ngOnInit(): void {
    const params = this.router.snapshot.params
    const idFilm = params.id;
    this.filmService.getFilms().subscribe(films => {
      this.film = films.find(({id}) => id === Number(idFilm));
    });
  }

}
