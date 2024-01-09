import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {    library.addIconPacks(fas, far);  }
}
