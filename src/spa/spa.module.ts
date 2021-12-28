import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { SpaConfigService } from './services/spa-config.service';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { ScreenService } from './services/screen.service';

@NgModule({
    imports: [CommonModule],
    declarations: [
        SpaBodyComponent,
        SpaHeaderComponent,
        SpaContentComponent,
        SpaFooterComponent,
        IconBarComponent
    ],
    exports: [SpaBodyComponent],
    providers: [SpaConfigService, ScreenService]
})
export class SpaModule { }