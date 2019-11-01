import { Pipe, Injectable, Inject } from "@angular/core";
import { DiscountService } from "./discount.service";
import { LogService, LOG_SERVICE } from './log.service';
@Pipe({
    name: "discount",
    pure: false
})
export class PaDiscountPipe {
    constructor(private discount: DiscountService, private logger: LogService) { }
    transform(price: number): number {
        if (price > 100) {
            this.logger.logInfoMessage(`Large price discounted: ${price}`);
        }
        return this.discount.applyDiscount(price);
    }
}
