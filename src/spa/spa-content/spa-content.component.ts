import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'spa-content',
  templateUrl: './spa-content.component.html',
  styleUrls: ['./spa-content.component.css']
})
export class SpaContentComponent implements OnInit {

  constructor(public menuService: MenuService, public screenService: ScreenService) { }

  ngOnInit(): void {
  }

}
