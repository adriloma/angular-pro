import { Component, OnInit } from '@angular/core';
import { Model } from './repository.model';

@Component({
    selector: 'pro-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    model: Model = new Model();
}
