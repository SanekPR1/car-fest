import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
    items: Array<MenuItem> = new Array();
    isVertical: boolean = false;
    showVerticalMenu: boolean = false;

    toggleMenu(): void {
        this.isVertical = true;
        this.showVerticalMenu = !this.showVerticalMenu;
    }

    toggleOrientation(): void {
        this.isVertical = !this.isVertical;
    }
}

export interface MenuItem {
    text: string;
    icon: string;
    route: string;
    subMenu: Array<MenuItem>;
}