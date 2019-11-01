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
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { DiscountService } from './discount.service';
import { PaDiscountPipe } from './discount.pipe';
import { PaDiscountAmountDirective } from './discountAmount.directive';
import { SimpleDataSource } from './product/datasource.model';
import { Model } from './product/repository.model';
import { LOG_SERVICE, LogService, LogLevel, LOG_LEVEL } from './log.service';


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
    PaCategoryFilterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountPipe,
    PaDiscountAmountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
    providers: [DiscountService,
                SimpleDataSource,
                Model,
                {provide: 'debugLevel', useExisting: LOG_LEVEL},
                {provide: LOG_LEVEL, useValue: LogLevel.ERROR},
                { provide: LOG_SERVICE,
                    deps: ['debugLevel'],
                useFactory: (level: LogLevel) => {
                    const logger = new LogService();
                    logger.minimumLevel = level;
                    return logger;
                }}
            ],
    bootstrap: [ProductComponent]
})
export class AppModule { }
