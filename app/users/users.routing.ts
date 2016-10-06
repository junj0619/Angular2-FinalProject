import { RouterModule }      from '@angular/router';

import { UsersComponent }    from './users.component';
import { UserFormComponent } from './user-form.component';

export const usersRouting = RouterModule.forChild([
    { path: 'users/new', component: UserFormComponent },
    { path: 'users/:id', component: UserFormComponent },
    { path: 'users', component: UsersComponent }

])