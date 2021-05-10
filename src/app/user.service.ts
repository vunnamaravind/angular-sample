import { Injectable } from '@angular/core';
// @ts-ignore
import {AngularFireDatabase, FirebaseObjectObservable} from '@angular/fire/database';
import * as i0 from '@angular/core';
import * as i1 from '@angular/fire/database';
import firebase from 'firebase/app';
import {AppUser} from './model/app-user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  db: AngularFireDatabase) { }

  // tslint:disable-next-line:typedef
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // @ts-ignore
  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
