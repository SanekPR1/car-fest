import { Routes } from "@angular/router";
import { AppHomeComponent } from "./app-home/app-home.component";
import { SettingsComponent } from "./settings/settings.component";

export const appRoutes: Routes = [
    { path: 'home', component: AppHomeComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: AppHomeComponent } // if incorrect route 
]