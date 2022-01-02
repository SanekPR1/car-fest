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

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    SettingsComponent,
    CarDetailComponent,
    CarListComponent,
    CarMaintComponent,
    AuthenticatedComponent
  ],
  imports: [
    BrowserModule,
    SpaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
