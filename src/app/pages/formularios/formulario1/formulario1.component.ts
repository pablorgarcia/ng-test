import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../../service/form-data.service';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html'
})
export class Formulario1Component implements OnInit {

  public form1Group: FormGroup = new FormGroup({});

  @Output() onChangeForm1 = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const datas = FormDataService.getFormData();
    const data = datas[0];
    const { item } = data;
    this.form1Group = this.fb.group({
      f1ItemId: [item.f1_item_id, [Validators.required]],
      f1Data: [item.f1_dato, [Validators.required]]
    });

    this.onChangeForm1.emit(this.form1Group.value);

    this.form1Group.valueChanges.subscribe(value => {
      this.onChangeForm1.emit(value);
    });
  }

}
