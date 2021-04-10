import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidationService } from '../../../service/form-validation.service';


@Component({
  selector: 'app-form-messages',
  templateUrl: './form-messages.component.html',
})
export class FormMessagesComponent implements OnInit, OnChanges {
  @Input() formControl: FormControl = new FormControl();
  @Input() error: any;

  public errorMessages: string[] = [];

  constructor(private validationService: FormValidationService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { error } = changes;

    if (error && error.currentValue) {
      this.errorMessages = [];
      Object.keys(error.currentValue).map((key: any) => {
        // Añadimos el valor a nuestra variable de colección de messanges
        // Guardamos el array de datos que tenemos con los nuevos datos, para ello concatenamos los valores. [...valor1, ...valor2]
        this.errorMessages = [
          ...this.errorMessages,
          this.validationService.getMessage(key),
        ];
      });
      console.log(this.errorMessages)
    }
  }
}
