import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { PaginationComponent }  from './pagination.component';
import { SpinnerComponent }     from './spinner.component';

import { BaseValidators }         from './baseValidators';

@NgModule({
imports     :[CommonModule],
declarations:[
    PaginationComponent,
    SpinnerComponent
],
exports     :[
    PaginationComponent,
    SpinnerComponent
],
providers   :[BaseValidators]
})

export class SharedModule {}