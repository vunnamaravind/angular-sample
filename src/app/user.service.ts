import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as i0 from '@angular/core';
import * as i1 from '@angular/fire/database';
import firebase from 'firebase/app';
import {AppUser} from './model/app-user';
import { Observable } from 'rxjs';

class FirebaseObjectObservable {
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  db: AngularFireDatabase) { }

  // tslint:disable-next-line:typedef
  save(user: firebase.User) {
    // @ts-ignore
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
