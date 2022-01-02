import { Routes } from "@angular/router";
import { AppHomeComponent } from "./app-home/app-home.component";
import { AuthenticatedComponent } from "./authenticated/authenticated.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarMaintComponent } from "./car-maint/car-maint.component";
import { SettingsComponent } from "./settings/settings.component";

export const appRoutes: Routes = [
    {
        path: 'authenticated', component: AuthenticatedComponent, children: [
            { path: 'home', component: AppHomeComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'car-list/:count', component: CarListComponent },
            { path: 'car-detail/:car', component: CarDetailComponent },
            { path: 'car-maint', component: CarMaintComponent }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: AppHomeComponent } // if incorrect route 
]