import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaBodyComponent } from './spa-body/spa-body.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SpaBodyComponent],
    exports: [SpaBodyComponent]
})
export class SpaModule { }