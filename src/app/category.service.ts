import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireDatabaseModule, AngularFireList, PathReference, QueryFn,
  SnapshotAction
} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories$: AngularFireDatabaseModule;

  constructor(private db: AngularFireDatabaseModule, private route: ActivatedRoute) {
    this.categories$ = db;
  }

  // tslint:disable-next-line:typedef
  getCategories() {
    return this.db.list('/categories', ref => (ref.orderByChild('name'))).snapshotChanges();
  }
}
