import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../../service/form-data.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html'
})
export class Formulario2Component implements OnInit {

  // Mostramos los datos en los inputs y hacemos calculos entre ellos
  public form2Group: FormGroup = new FormGroup({});
  @Output() onChangeForm2 = new EventEmitter();

  constructor(
    private fb: FormBuilder
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
      f2Data: [item.f2_dato, [Validators.required]]
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

      // Añadimos el nuebo valor al resultado final
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
}
