import { MenuItem } from "src/spa/services/menu.service";

export const AppMenuItems: Array<MenuItem> = [
    {
        text: 'Cars', icon: 'imgs/car.png', route: '/cars', subMenu: [
            {
                text: 'Select', icon: 'imgs/car.png', route: null, subMenu: [
                    { text: 'Audi', icon: 'imgs/car.png', route: '/car-detail/audi', subMenu: null },
                    { text: 'BMW', icon: 'imgs/car.png', route: '/car-detail/bmw', subMenu: null },
                    { text: 'Fiat', icon: 'imgs/car.png', route: '/car-detail/fiat', subMenu: null },
                    { text: 'Ford', icon: 'imgs/car.png', route: '/car-detail/ford', subMenu: null }
                ]
            },
            { text: 'Pric top', icon: 'imgs/car.png', route: '/car-list/1', subMenu: null },
            { text: 'Top 3', icon: 'imgs/car.png', route: '/car-list/3', subMenu: null },
            { text: 'Top 5', icon: 'imgs/car.png', route: '/car-list/5', subMenu: null }
        ]
    },
    {
        text: 'Maintenance', icon: 'imgs/settings.png', route: null, subMenu: [
            { text: 'Car maintenance', icon: 'imgs/settings.png', route: '/car-maint', subMenu: null },
            { text: 'Settings', icon: 'imgs/settings.png', route: '/settings', subMenu: null }
        ]
    },
    { text: 'Home', icon: 'imgs/home.png', route: '/home', subMenu: null }
] 