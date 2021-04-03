import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { FILM_FORM } from '../../service/constant/form.constant';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit, OnDestroy {
  public filmFormGroup: FormGroup;
  public langFormGroup: FormGroup = new FormGroup({});

  private unsubscribes: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filmFormGroup = this.fb.group(FILM_FORM);
    // Coger los cambios de todo el formulario
    const sub = this.filmFormGroup.valueChanges.subscribe((form) =>
      console.log(form)
    );
    this.unsubscribes.push(sub);

    // Coger los cambios de un control en concreto
    const sub2 = this.filmFormGroup.controls[
      'title'
    ].valueChanges.subscribe((control) => console.log(control));
    this.unsubscribes.push(sub2);

    this.langFormGroup = this.fb.group({
      shortName: ['', Validators.required],
      langName: ['', Validators.required],
    });
  }

  addLang() {
    // Cogemos los valores del formulario del idioma
    const { shortName, langName } = this.langFormGroup.value;
    // Cogemos el control de formulario padre, para actualizar el valor
    const { spoken_languages } = this.filmFormGroup.controls;

    // Guardamos el valor actual
    const languages = spoken_languages.value;

    // Actualizamos el valor actual con el nuevo dato
    languages.push({ shortName, langName });

    // Hacemos el set con los nuevos datos
    spoken_languages.setValue(languages);
    spoken_languages.updateValueAndValidity();

    // limpiamos los valores del form
    this.langFormGroup.reset();
  }

  onSubmit() {
    console.log(this.filmFormGroup.value);
  }

  ngOnDestroy() {
    this.unsubscribes.map((sub) => sub.unsubscribe());
  }
}
