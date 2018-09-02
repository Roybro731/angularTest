import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRouteModuleModule } from './app-route-module/app-route-module.module';
import { ToDoModuleModule } from './to-do-module/to-do-module.module';
import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './add-product/add-product.component';
import { reducer } from './store/proucts.reducer';
import { ErrorPageComponent } from './sharedComponents/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    HeaderComponent,
    AddProductComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ToDoModuleModule,
    AppRouteModuleModule,
    StoreModule.forRoot({
      products: reducer
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
