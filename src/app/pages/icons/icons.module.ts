import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [
    IconsComponent,

  ],
  exports: [
    IconsComponent,
  ],
})
export class IconsModule { }
