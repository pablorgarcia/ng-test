import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor() {}

  public getMessage(error: string): string {
    const errors = {
      required: 'Este campo es requerido.',
      maxlength: 'Este campo excede del número máximo de caracteres permitidos.',
      minlength: 'Este campo no llega al mínimo de caracteres permitidos.',
      pattern: 'El formato no es válido.',
    };

    return errors[error];
  }
}
