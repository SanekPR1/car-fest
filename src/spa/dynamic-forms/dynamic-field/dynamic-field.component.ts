import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldInput } from '../field-interface';

@Component({
  selector: 'spa-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {
  @Input() field: FieldInput;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
