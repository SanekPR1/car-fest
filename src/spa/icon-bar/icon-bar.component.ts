import { Component, Input, OnInit } from '@angular/core';
import { SpaConfigService } from '../services/spa-config.service';
import { UserApi } from '../users/users-api';

@Component({
  selector: 'icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  showLoader: boolean = false;
  @Input()
  showIcons: boolean;

  constructor(public spaConfigService: SpaConfigService, private userApi: UserApi) { }

  ngOnInit(): void {
    this.showLoader = false;
  }

  signOut() {
    this.showLoader = true
    setTimeout(() => { this.userApi.signOut(); }, 2000);
    console.log("Signed out");
  }

}
