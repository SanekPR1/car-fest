import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { SpaConfigService } from './services/spa-config.service';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { ScreenService } from './services/screen.service';
import { ScreenSmallDirective } from './directives/screen-small.directives';
import { ScreenLargeDirective } from './directives/screen-large.directives';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [
        SpaBodyComponent,
        SpaHeaderComponent,
        SpaContentComponent,
        SpaFooterComponent,
        IconBarComponent,
        ScreenSmallDirective,
        ScreenLargeDirective,
        MenuComponent,
        MenuItemComponent,
        PopupMenuComponent,
        RegistrationComponent,
        SignInComponent
    ],
    exports: [SpaBodyComponent],
    providers: [SpaConfigService, ScreenService, MenuService]
})
export class SpaModule { }