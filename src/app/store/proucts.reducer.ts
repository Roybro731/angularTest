import { Action } from '@ngrx/store';

import { Products } from '../interfaces/products';
import * as ProductActions from '../store/proucts.actions';

const products: Array<Products> = [{
    name: null,
    category: null,
    price: null,
    createdDate: null
}];

export function reducer(state: Array<Products> = products, action: ProductActions.Actions) {
    switch (action.type) {
        case ProductActions.ADD_PRODUCT:
            state.push(action.payload);
            break;

        case ProductActions.DELETE_PRODUCT:
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
            break;

        default:
            break;
    }

    localStorage.setItem('products', JSON.stringify(state));
    return state;
}
