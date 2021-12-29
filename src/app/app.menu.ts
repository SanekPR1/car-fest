import { MenuItem } from "src/spa/services/menu.service";

export const AppMenuItems: Array<MenuItem> = [
    { text: 'Cars', icon: 'imgs/car.png', route: '/cars', subMenu: new Array() },
    { text: 'Maintenance', icon: 'imgs/settings.png', route: '/settings', subMenu: new Array() },
    { text: 'Home', icon: 'imgs/home.png', route: '/home', subMenu: new Array() }
]