import { Injectable } from '@angular/core';
import { ITEMS } from './constant/data.constant';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() {}

  public static getFormData(): any {
    return ITEMS;
  }
}
