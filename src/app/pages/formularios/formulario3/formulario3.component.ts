import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html'
})
export class Formulario3Component implements OnInit {

  public form3Group = new FormGroup({});
  @Input() form1: any|undefined;
  @Input() form2: any|undefined;

    // Mostramos los datos en los inputs y salvamos los datos de los 3 formularios

  constructor() {}

  ngOnInit(): void {}

  save() {}

}
