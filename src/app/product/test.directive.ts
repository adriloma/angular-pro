import { Directive, ElementRef, Input, SimpleChange, Output, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { Product } from './product.model';

@Directive({
    selector: '[pro-test]'
})
export class TestDirective {
    @Input("pro-product") product: Product;

    @Input("pro-test") @HostBinding("class") bgClass: string;

    @Output("pro-category") click = new EventEmitter<string>();

    @HostListener("click")  triggerCustomEvent() {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
    }
}
