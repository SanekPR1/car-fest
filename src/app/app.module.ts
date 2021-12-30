import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SpaModule } from 'src/spa/spa.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './routes/app-home/app-home.component';
import { appRoutes } from './routes/app.routes';
import { CarsComponent } from './routes/cars/cars.component';
import { SettingsComponent } from './routes/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    CarsComponent,
    SettingsComponent
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
