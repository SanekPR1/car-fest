import { Routes } from "@angular/router";
import { RegistrationComponent } from "src/spa/users/registration/registration.component";
import { SignInComponent } from "src/spa/users/sign-in/sign-in.component";
import { AuthGuardService } from "../services/auth-guard.service";
import { AppHomeComponent } from "./app-home/app-home.component";
import { AuthenticatedComponent } from "./authenticated/authenticated.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarMaintComponent } from "./car-maint/car-maint.component";
import { SettingsComponent } from "./settings/settings.component";

export const appRoutes: Routes = [
    { path: 'sign-in', component: SignInComponent },
    { path: 'register', component: RegistrationComponent },
    {
        path: 'authenticated', component: AuthenticatedComponent, canActivate: [AuthGuardService], children: [
            {
                path: '', canActivateChild: [AuthGuardService], children: [
                    { path: 'home', component: AppHomeComponent },
                    { path: 'settings', component: SettingsComponent },
                    { path: 'car-list/:count', component: CarListComponent },
                    { path: 'car-detail/:car/:operation', component: CarDetailComponent },
                    { path: 'car-maint', component: CarMaintComponent }
                ]
            },
        ]
    },
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: '**', component: SignInComponent } // if incorrect route 
]