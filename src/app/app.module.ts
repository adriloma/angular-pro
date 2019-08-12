import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
    bootstrap: [ProductComponent]
})
export class AppModule { }
