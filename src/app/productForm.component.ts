import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { ProductFormGroup } from './product/form.model';
import { Product } from './product/product.model';
import { Model } from './product/repository.model';

@Component({
    selector: 'paProductForm',
    templateUrl: 'productForm.component.html',
    // styleUrls: ['productForm.component.css'],
    // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;
    constructor(private model: Model) {}

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
