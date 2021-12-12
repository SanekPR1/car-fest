import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-footer',
  templateUrl: './spa-footer.component.html',
  styleUrls: ['./spa-footer.component.css']
})
export class SpaFooterComponent implements OnInit {
  title: string = "All rights reserved";
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
