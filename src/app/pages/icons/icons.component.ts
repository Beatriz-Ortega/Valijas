import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'icons-cmp',
    templateUrl: 'icons.component.html'
})

export class IconsComponent{
  faCoffee = faCoffee;
}
