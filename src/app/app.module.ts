import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './add-product/add-product.component';
import { reducer } from './store/proucts.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    HeaderComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      products: reducer
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
