import { NgModule }             from '@angular/core';
import { FormsModule,
         ReactiveFormsModule}   from '@angular/forms';
import { CommonModule }         from '@angular/common';


import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { UsersComponent }       from './users.component';
import { UserFormComponent }    from './user-form.component';

import { UsersService }         from './users.service';

import { BaseValidators }       from '../shared/baseValidators';

import { User }                 from './user';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    exports: [
        UsersComponent,
        UserFormComponent
    ],
    providers: [
        User,
        UsersService,
        BaseValidators
    ]
})

export class UsersModule { }