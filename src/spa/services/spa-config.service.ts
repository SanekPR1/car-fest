import { Injectable } from "@angular/core";

@Injectable()
export class SpaConfigService {
    showUserControls: boolean = true;
    socialIcons = new Array<Icons>();
    //this method will assign settings to the object on what it'll be applied => as an example AppModule
    configure(settings: SpaConfigSettings): void {
        Object.assign(this, settings);
    }
}

export interface Icons {
    imageFile: string;
    url: string;
    alt: string;
}

export interface SpaConfigSettings {
    showUserControls?: boolean;
    socialIcons?: Array<Icons>;
}