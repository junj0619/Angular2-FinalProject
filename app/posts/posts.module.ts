import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HttpModule }          from '@angular/http';

import { SharedModule }        from '../shared/shared.module';

import { PostsComponent }      from './posts.component';

import { PostsService }        from './posts.service';
import { UsersService }        from '../users/users.service';

import { Post }                from './post';

@NgModule({
imports     :[ 
    CommonModule,
    HttpModule,
    SharedModule    
],
declarations:[ PostsComponent ],
exports     :[PostsComponent],
providers   :[ 
    UsersService,
    PostsService,
    Post 
] 
})

export class PostsModule{

}
