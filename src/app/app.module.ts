import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestDirective } from './product/test.directive';
import { PaModel } from './product/twoway.directive';
import { ProIfDirective } from './product/proif.directive';
import { PaIteratorDirective } from './product/iterator.directive';
import { PaCellColor } from './product/cellColor.directive';
import { PaCellColorSwitcher } from './product/cellColorSwitcher.directive';

@NgModule({
  declarations: [
    ProductComponent,
    TestDirective,
    PaModel,
    ProIfDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher
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
