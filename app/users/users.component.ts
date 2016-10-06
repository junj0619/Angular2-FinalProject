import {Component, OnInit} from '@angular/core';

import {UsersService} from './users.service';
import {User} from './user.interface';

@Component({
    selector: 'user',
    templateUrl: 'app/users/users.component.html'    
})

export class UsersComponent implements OnInit {

    users: User[]
    constructor(private _userService: UsersService) {
    }

    ngOnInit() {
        this.GetUsers();
    }

    GetUsers() {
        this._userService.GetUsers()
            .subscribe(response => {
                this.users = response;
                // console.log(response);
            });
    }

    delete(user: User) {
        var result = confirm("Are you sure you want to delete " + user.name + "?");
        if (result) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this._userService.deleteUser(user.id)
                .subscribe(
                null,
                error => {
                    alert("Could not delete the user.");
                    // Revert the view back to its original state
                    // by putting the user object at the index
                    // it used to be.
                    this.users.splice(index, 0, user);
                });
        }
    }

}