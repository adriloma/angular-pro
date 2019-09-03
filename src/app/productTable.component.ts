import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { Model } from './product/repository.model';
import { Product } from './product/product.model';
@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    constructor(private model: Model) {}
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }
}
