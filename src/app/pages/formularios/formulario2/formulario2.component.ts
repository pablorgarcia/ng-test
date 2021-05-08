import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, LOCALE_ID, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from 'src/app/service/form-data.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html'
})
export class Formulario2Component implements OnInit {

  // Mostramos los datos en los inputs y hacemos calculos entre ellos
  public form2Group: FormGroup = new FormGroup({});
  @Output() onChangeForm2 = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    @Inject(LOCALE_ID) private _locale: string
  ) {}

  ngOnInit(): void {
    const datas = FormDataService.getFormData();
    const data = datas[0];
    console.log(data);
    const { item } = data;
    this.form2Group = this.fb.group({
      f2ItemId: [item.f2_item_id, [Validators.required]],
      f2ActualNum: [item.f2_numero_actual, [Validators.required]],
      f2Percent: [{value: item.f2_porcentaje, disabled: true}, [Validators.required]],
      f2NewPercent: [(data.f2_cambiar_porcentaje*100), [Validators.required, Validators.max(100)]],
      f2Result: [{value: item.f2_resultado, disabled: true}, [Validators.required]],
      f2Data: [item.f2_dato, [Validators.required]],

      f2StartDate: [item.f2StartDate, [Validators.required]],
      f2EndDate: [item.f2EndDate, [Validators.required]],
      f2NumDate: [item.f2NumDate, [Validators.required]],
      f2Text: [item.f2Text, [Validators.required]],
    });

    this.form2Group.controls['f2ActualNum'].valueChanges.subscribe(value => {
      const { f2Percent } = this.form2Group.controls;
      // Añadimos el nuebo valor al resultado final
      this.calcNewResult(value, f2Percent.value);
    });

    this.form2Group.controls['f2NewPercent'].valueChanges.subscribe(value => {
      const { f2Result, f2Percent, f2ActualNum } = this.form2Group.controls;
      // Calculamos el nuevo porcentaje
      f2Percent.setValue(value/100);
      f2Percent.updateValueAndValidity();

      // Añadimos el nuevo valor al resultado final
      this.calcNewResult(f2ActualNum.value, f2Percent.value);
    });

    this.onChangeForm2.emit(this.form2Group.value);

    this.form2Group.valueChanges.subscribe(value => {
      this.onChangeForm2.emit(value);
    });
  }

  /**
   * Calcular el valor
   *
   * @param value
   * @param percent
   */
  private calcNewResult(value: number, percent: number): void {
    const { f2Result } = this.form2Group.controls;
    const result = value * percent;
    f2Result.setValue(result);
    f2Result.updateValueAndValidity();
  }

  // ?????????????????????????????
  private dateToString(d: Date, conversion: string): string|any {
    const dp = new DatePipe(this._locale);
    const p = conversion;
    return dp.transform(d, p);
  }

  private checkDatesValidation(startDate: Date, endDate: Date): boolean {
    let timeDiff = endDate.getTime() - startDate.getTime();
    return Boolean(timeDiff > 0);
  }

  // AQUI LA FECHA INICIAL NUNCA VA  A SER SUPERIOR A LA FECHA FINAL
  onStartDateChange(): void {
    const { f2StartDate, f2EndDate } = this.form2Group.controls;
    if (f2EndDate.value) {
      const checkDateValid = this.checkDatesValidation(new Date(f2StartDate.value), new Date(f2EndDate.value));
      if (!checkDateValid) {
        // // Ponemos que la fecha final sea la fecha de inicio
        // const endDate = new Date(f2StartDate.value);

        // // Sumamos un día a la fecha final.
        // endDate.setDate(endDate.getDate() + 1);

        // // Actualizamos en el formulario el valor de la fecha
        // f2EndDate.setValue(this.dateToString(endDate,'y-MM-dd'));
        f2EndDate.setErrors({ date: true });
        // f2EndDate.updateValueAndValidity();
      } else {
        f2EndDate.setErrors(null);
      }
    }
  }

  // LA FECHA FINAL NO PUEDE SER INFERIOR A LA FECHA INICIAL,
  // MOSTRAR UN MENSAJE DE ERROR DESDE UN SERVICIO
  onEndDateChange(): void {
    const startDate = this.form2Group.controls['f2StartDate'].value;
    const endDate = this.form2Group.controls['f2EndDate'].value;

    if (startDate) {
      const checkDateValid = this.checkDatesValidation(new Date(startDate), new Date(endDate));
      if (!checkDateValid) {
        // Ponemos que la fecha final sea la fecha de inicio
        // const startDateValue = new Date(endDate);

        // // Sumamos un día a la fecha final.
        // startDateValue.setDate(startDateValue.getDate() - 1);

        // // Actualizamos en el formulario el valor de la fecha
        // this.form2Group.controls['f2StartDate'].setValue(this.dateToString(startDateValue,'y-MM-dd'));
        // this.form2Group.controls['f2StartDate'].updateValueAndValidity();
        this.form2Group.controls['f2StartDate'].setErrors({ date: true });
      } else {
        this.form2Group.controls['f2StartDate'].setErrors(null);
      }
    }
  }
}
