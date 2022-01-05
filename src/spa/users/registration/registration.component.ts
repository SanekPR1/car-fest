import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { visibility } from 'src/spa/services/animations';
import { Router } from '@angular/router';

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
  errorMessage: string;

  constructor(private router: Router, private userSerivce: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.regestering = true;
    this.userSerivce.registerUser(form.value).subscribe(() => {
      setTimeout(() => { this.hasAdded = true; }, 1000),
        setTimeout(() => { this.router.navigate(['/sign-in']); }, 1000)
    },
      (error) => {
        this.hasAdded = false;
        this.regestering = false;
        this.errorMessage = error;
      });
  }

}
