import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  // tslint:disable-next-line:typedef
  login() {
    const returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl')  || '/';
    localStorage.setItem('returnUrl', returnUrl);
    // @ts-ignore
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }


  // tslint:disable-next-line:typedef
  logout() {
    // @ts-ignore
    this.afAuth.authState.signOut();
  }
}
