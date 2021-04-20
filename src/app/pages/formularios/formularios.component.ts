import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  public form1Values: any;
  public form2Values: any;

  constructor() {}

  ngOnInit(): void {}

  setForm1(formValues: any) {
    this.form1Values = formValues;
  }

  setForm2(formValues: any) {
    this.form2Values = formValues;
  }
}
