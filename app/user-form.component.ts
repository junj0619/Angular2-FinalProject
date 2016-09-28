import {Component, OnInit} from 'angular2/core';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {BaseValidators} from './baseValidators';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    templateUrl: 'app/user-form.component.html',
    providers: [UsersService]
})
export class UserFormComponent implements CanDeactivate, OnInit {

    private form: ControlGroup;
    private user = new User();
    private title = {};
    private id;
    constructor(
        private fb: FormBuilder,

        private _router: Router,
        private _routeParams: RouteParams,
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

        let id = this._routeParams.get("id");
        this.title = id == null ? "Add User" : "Edit User";

        if (!id)
            return;

        this._userService.getUserById(id).subscribe(
            response => {
                this.user = response;
                // console.log(response);
            },
            response => {
                if (response.status == 404) {
                    this._router.navigate(['NotFound']);
                }
            }
        );
    }

    routerCanDeactivate() {
        if (this.form.dirty) {
            return confirm("You have unsaved changes. Are you sure you want to navigate away?");
        }
        return true;
    }

    addUser(user) {
        this._userService.addUser(user)
            .subscribe(x => console.log(x));
    }

    updateUser(user) {
        this._userService.updateUser(this._routeParams.get("id"), user)
            .subscribe(x => console.log(x));
    }

    save() {
        if (this.user.id)
            this.updateUser(this.user);
        else
            this.addUser(this.user);

        // Ideally, here we'd want:
        // this.form.markAsPristine();
        this._router.navigate(['Users'])
    }


}