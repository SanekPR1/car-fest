import { Component, OnInit, EventEmitter, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { Car } from 'src/app/services/car-interface';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldInput } from '../field-interface';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'spa-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() vm: Car;
  @Input() vmDefinition: Array<FieldInput>;
  @Input() operation: string;
  @Input() errorMesssage: string;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  status: string;
  submitted = false;
  vmCopy: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {

  }

  clearForm() {
    const group: any = {};
    this.vmCopy = Object.assign({}, this.vm);
    this.vmDefinition.forEach(field => {
      const key = field.key;
      group[field.key] = field.required ?
        new FormControl(this.vmCopy[field.key], Validators.required) :
        new FormControl(this.vmCopy[field.key])
    });
    this.form = new FormGroup(group);
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
