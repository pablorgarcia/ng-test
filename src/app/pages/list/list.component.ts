import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/service/films.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private filmService: FilmsService,
  ) { }

  ngOnInit(): void {
    console.log(this.filmService.getFilms());
  }

}
