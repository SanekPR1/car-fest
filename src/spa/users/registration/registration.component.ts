import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'spa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
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
