
import { Component }       from '@angular/core';

import { NavbarComponent } from './navbar.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container" style="padding-top: 70px;">
            <router-outlet></router-outlet>
        </div>    
    `    
})

export class AppComponent {
    constructor() {}
}