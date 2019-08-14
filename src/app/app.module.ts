import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestDirective } from './product/test.directive';
import { PaModel } from './product/twoway.directive';

@NgModule({
  declarations: [
    ProductComponent,
    TestDirective,
    PaModel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
    bootstrap: [ProductComponent]
})
export class AppModule { }
