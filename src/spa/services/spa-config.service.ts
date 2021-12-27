import { Injectable } from "@angular/core";

@Injectable()
export class SpaConfigService {
    showUserControls: boolean = true;
    socialIcons = new Array<Icons>();
    configure(settings: Settings): void {
        Object.assign(this, settings);
    }
}

export interface Icons {
    imageFile: string;
    url: string;
    alt: string;
}

export interface Settings {
    showUserControls?: boolean;
    socialIcons?: Array<Icons>;
}