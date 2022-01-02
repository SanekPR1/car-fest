import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { UserApi } from '../users-api';

@Component({
  selector: 'spa-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  submitting = false;
  formError: string;

  constructor(private userApi: UserApi) { }

  ngOnInit(): void {
  }

  onSubmit(form: Form) { }
}
