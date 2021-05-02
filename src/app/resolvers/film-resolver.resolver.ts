import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FilmsService } from '../service/films.service';

@Injectable({
  providedIn: 'root'
})
export class FilmResolverResolver implements Resolve<boolean> {
  constructor(
    private filmService: FilmsService
    ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    debugger;
    return this.filmService.getFilmDetail(route.paramMap.get('id'));
  }
}
