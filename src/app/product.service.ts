import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

class NotFoundError {
}

class AppError {
  constructor(error: any) {

  }

}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<any[]>;

  constructor(private db: AngularFireDatabaseModule) { }


  // tslint:disable-next-line:typedef
  create(product) {
    // @ts-ignore
    return this.db.list('/products').push(product);
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.db.list('/products');
  }

  // tslint:disable-next-line:typedef
  get(productId) {
    return this.db.object('/products' + productId);
  }

  // tslint:disable-next-line:typedef
  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  // tslint:disable-next-line:typedef
  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }

}
