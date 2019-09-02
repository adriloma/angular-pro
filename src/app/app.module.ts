import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestDirective } from './product/test.directive';
import { PaModel } from './product/twoway.directive';
import { ProIfDirective } from './product/proif.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './product/cellColor.directive';
import { PaCellColorSwitcher } from './product/cellColorSwitcher.directive';
import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaToggleView } from './toggleView.component';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    TestDirective,
    PaModel,
    ProIfDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleView,
    PaAddTaxPipe,
    PaCategoryFilterPipe
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
