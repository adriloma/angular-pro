import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { NgForm } from '@angular/forms';
import { ProductFormGroup } from './form.model';

@Component({
    selector: 'pro-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    model: Model = new Model();
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    addProduct(p: Product) {
        console.log('New Product: ' + this.jsonProduct);
    }
    getValidationMessages(state: any, thingName?: string) {
        const thing: string = state.path || thingName;
        const messages: string[] = [];
        if (state.errors) {
            // tslint:disable-next-line: forin
            for (const errorName in state.errors) {
                switch (errorName) {
                    case 'required':
                        messages.push(`You must enter a ${thing}`);
                        break;
                    case 'minlength':
                        messages.push(`A ${thing} must be at least
                            ${state.errors.minlength.requiredLength}
                            characters`);
                        break;
                    case 'pattern':
                        messages.push(`The ${thing} contains
                             illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }
    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
    getFormValidationMessages(form: NgForm): string[] {
        const messages: string[] = [];
        Object.keys(form.controls).forEach(k => {
            this.getValidationMessages(form.controls[k], k)
                .forEach(m => messages.push(m));
        });
        return messages;
    }
}
