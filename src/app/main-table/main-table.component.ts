import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';



import { reducer } from '../store/proucts.reducer';
import * as productAction from '../store/proucts.actions';
import { Products } from '../interfaces/products';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  public tableHeaders = ['Name', 'Category', 'Price', 'Created Date'];
  public products: Observable<Products[]>;

  constructor(private store: Store<AppState>) {
    this.products = store.select('products');
    console.log(`this.products  ${this.products}`);
   }

  ngOnInit() {
  }

  deleteObject(data) {
    this.store.dispatch(new productAction.DeleteProduct(data));
  }

}
