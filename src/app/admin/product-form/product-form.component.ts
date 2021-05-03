import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {SnapshotAction} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {ProductService} from '../../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<SnapshotAction<unknown>[]>;
  product: {
    imageUrl: any;
    category: any;
    price: any;
    title: any;
  };
  id: string;

  constructor(
    private  router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories().snapshotChanges();


    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.productService.get(this.id).take(1).subscribe(p => this.product = p); }
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  save(product) {
    this.product = product;
    if (this.id) { this.productService.update(this.id, this.product); }
    else { this.productService.create(this.product); }

    this.router.navigate(['/admin/products']);
  }
}
