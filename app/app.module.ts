import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';


import { routing }                      from './app.routing';
import { postsRouting }                 from './posts/posts.routing';
import { usersRouting }                 from './users/users.routing';

import { PostsModule }                  from './posts/posts.module';
import { UsersModule }                  from './users/users.module';
import { SharedModule }                 from './shared/shared.module';

import { AppComponent }                 from './app.component';
import { HomeComponent }                from './home.component';
import { NavbarComponent }              from './navbar.component';
import { NotFoundComponent }            from './not-found.component';

@NgModule({
    imports     : [
        BrowserModule,     
        PostsModule,
        UsersModule,
        SharedModule,
        usersRouting,
        postsRouting,
        routing
    ],
    declarations: [ 
        AppComponent,
        HomeComponent,
        NavbarComponent,
        NotFoundComponent
    ], 
 
    bootstrap   : [ AppComponent ]
})

export class AppModule {}