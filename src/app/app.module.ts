import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SpaModule } from 'src/spa/spa.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './routes/app-home/app-home.component';
import { appRoutes } from './routes/app.routes';
import { SettingsComponent } from './routes/settings/settings.component';
import { CarDetailComponent } from './routes/car-detail/car-detail.component';
import { CarListComponent } from './routes/car-list/car-list.component';
import { CarMaintComponent } from './routes/car-maint/car-maint.component';
import { AuthenticatedComponent } from './routes/authenticated/authenticated.component';
import { UserService } from './services/user.service';
import { UserApi } from 'src/spa/users/users-api';
import { AuthGuardService } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { CarPanelComponent } from './panels/car-panel/car-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    SettingsComponent,
    CarDetailComponent,
    CarListComponent,
    CarMaintComponent,
    AuthenticatedComponent,
    CarPanelComponent,
    ImagePanelComponent
  ],
  imports: [
    BrowserModule,
    SpaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    // to make UserService available in SPA module and its component
    { provide: UserApi, useExisting: UserService },
    AuthGuardService,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
