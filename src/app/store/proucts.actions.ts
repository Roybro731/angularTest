import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Products } from '../interfaces/products';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';


export class AddProduct implements Action {
    readonly type = ADD_PRODUCT;
    constructor(public payload: Products) {}
}

export class DeleteProduct implements Action {
    readonly type = DELETE_PRODUCT;
    constructor(public payload: Products) {}
}

export type Actions = AddProduct | DeleteProduct;
