import { Injectable } from '@angular/core';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabaseModule) { }

  // tslint:disable-next-line:typedef
  getCategories() {
    // @ts-ignore;
  }
}
