/// <reference path="../typings/tsd.d.ts" />
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './navbar.component';


import {HomeComponent} from './home.component';
import {PostsComponent} from './posts.component';
import {UsersComponent} from './users.component';
import {UserFormComponent} from './user-form.component';
import {NotFoundComponent} from './not-found.component';

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/users/new', name: 'AddUser', component: UserFormComponent },
    { path: '/users/new/:id', name: 'EditUser', component: UserFormComponent },   
    { path: '/notfound', name: "NotFound", component: NotFoundComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container" style="padding-top: 70px;">
            <router-outlet></router-outlet>
        </div>    
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
    constructor() {
    }
}