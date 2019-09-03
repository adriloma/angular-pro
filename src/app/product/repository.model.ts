import { SimpleDataSource } from './datasource.model';
import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Model {
    // private dataSource: SimpleDataSource;
    private products: Product[];

    constructor(private dataSource: SimpleDataSource) {
        // this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }

    getProducts() {
        return this.products;
    }

    getProduct(id: number) {
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        } else {
            const index = this.products.findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        const index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while(this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

    private locator(p: Product, id: number): boolean {
        return p.id === id;
    }

}
