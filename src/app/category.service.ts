import { Injectable } from '@angular/core';
import {AngularFireDatabaseModule, SnapshotAction} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories$: Observable<SnapshotAction<undefined>[]>;

  constructor(private db: AngularFireDatabaseModule, private route: ActivatedRoute) {
    // @ts-ignore
    this.categories$ = db.list;
  }

  // tslint:disable-next-line:typedef
  getCategories() {
    // @ts-ignore
    return this.db.list('/categories', ref => (ref.orderByChild('name'))).snapshotChanges();
  }
}
