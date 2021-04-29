import { Injectable } from '@angular/core';
import {AngularFireDatabaseModule} from '@angular/fire/database';
 import {AngularFireModule} from '@angular/fire';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories$: any
  ;

  constructor(private db: AngularFireDatabaseModule, private route: ActivatedRoute) {
    // @ts-ignore
    this.categories$ = db.list;
  }

  // tslint:disable-next-line:typedef
  getCategories() {
    this.db.list('/categories', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
