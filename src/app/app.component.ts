import { Component } from '@angular/core';
import { SpaConfigService, SpaConfigSettings, Icons } from 'src/spa/services/spa-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private spaConfigService: SpaConfigService) {
    const config: SpaConfigSettings = {
      socialIcons: [
        { imageFile: 'imgs/facebook.png', alt: 'Facebook', url: "https://facebook.com" },
        { imageFile: 'imgs/instagram.png', alt: 'Instagram', url: "https://instagram.com" },
        { imageFile: 'imgs/twitter.png', alt: 'Twitter', url: "https://twitter.com" },
        { imageFile: 'imgs/whatsapp.png', alt: 'Whatsapp', url: "https://whatsapp.com" }
      ],
      showUserControls: true
    };
    spaConfigService.configure(config);
  }
}
