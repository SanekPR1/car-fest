import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { visibility } from 'src/spa/services/animations';

@Component({
  selector: 'spa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [visibility]
})
export class RegistrationComponent implements OnInit {
  regestering = false;
  formError: string;
  hasAdded = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: Form) { }

}
