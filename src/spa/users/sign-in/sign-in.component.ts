import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  submitting = false;
  formError: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { }
}