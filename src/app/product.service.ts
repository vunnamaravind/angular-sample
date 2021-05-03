import { Injectable } from '@angular/core';
import {AngularFireDatabaseModule} from '@angular/fire/database';
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

  constructor(private db: AngularFireDatabaseModule) { }


  // tslint:disable-next-line:typedef
  create(product) {
    // @ts-ignore
    return this.db.list('/products').push(product);
  }

  // tslint:disable-next-line:typedef
  getAll() {
    // @ts-ignore
    return this.db.list('/products');
  }

  // tslint:disable-next-line:typedef
  get(productId) {
    // @ts-ignore
    return this.db.object('/products' + productId);
  }

  // tslint:disable-next-line:typedef
  update(productId, product) {
    // @ts-ignore
    return this.db.object('/products/' + productId).update(product);
  }

}
