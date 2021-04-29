import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(categoryServices: CategoryService) {
    // @ts-ignore
    this.categories$ = categoryServices.getCategories().snapshotChanges();
  }
  categories$;

  // tslint:disable-next-line:typedef
  private product: any;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  save() {
    console.log(this.product);
  }
}
