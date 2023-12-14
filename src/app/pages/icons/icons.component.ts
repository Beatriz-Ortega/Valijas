import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCoffee);
@Component({
    selector: 'icons-cmp',
    templateUrl: 'icons.component.html'
})

export class IconsComponent{}
