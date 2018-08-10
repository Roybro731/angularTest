import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Products } from '../interfaces/products';
import { AppState } from '../store/app.state';
import { reducer } from '../store/proucts.reducer';
import * as productAction from '../store/proucts.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public product: Products = {
    name: null,
    category: null,
    price: null,
    createdDate: null
  };
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addProduct() {
    const newProduct: Products = {
      name: this.product.name,
      category: this.product.category,
      price: this.product.price,
      createdDate: new Date()
    };
    this.store.dispatch(new productAction.AddProduct(newProduct));
  }

}
