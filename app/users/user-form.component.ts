import { Component, OnInit }                 from '@angular/core';
import { ActivatedRoute, Router }            from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {BaseValidators} from '../shared/baseValidators';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    templateUrl: 'app/users/user-form.component.html'
})
export class UserFormComponent implements OnInit {

    private form: FormGroup;
    private user = new User();
    private title: string;
    private id: number;
    constructor(
        private fb: FormBuilder,

        private _router: Router,
        private _route: ActivatedRoute,
        private _userService: UsersService
    ) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', BaseValidators.email],
            phone: [],
            address: this.fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        })
    }

    ngOnInit() {

        var id = this._route.params.subscribe(params => {
            this.id = +params["id"];
            this.title = this.id ? "Edit User" : "New User";

        })


        if (!this.id || isNaN(this.id))
            return;

        this._userService.getUserById(this.id).subscribe(
            user => {
                this.user = user;
                // console.log(response);
            },
            response => {
                if (response.status == 404) {
                    this._router.navigate(['NotFound']);
                }
            }
        );
    }

    addUser(user) {
        this._userService.addUser(user)
            .subscribe(x => console.log(x));
    }

    updateUser(user) {
        this._userService.updateUser(user.id, user)
            .subscribe(x => console.log(x));
    }

    save() {
        if (this.user.id)
            this.updateUser(this.user);
        else
            this.addUser(this.user);

        // Ideally, here we'd want:
        // this.form.markAsPristine();
        this._router.navigate(['users'])
    }


}