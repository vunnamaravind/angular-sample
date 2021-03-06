import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {ActivatedRoute} from '@angular/router';
import {AppUser} from './model/app-user';
import {UserService} from './user.service';

@Injectable()
export class AuthService {
  // @ts-ignore
  user$: Observable<firebase.User>;
  authState: any;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  // tslint:disable-next-line:typedef
  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    // this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth
        .signInWithRedirect(provider).then(res => {
          resolve(res);
        // tslint:disable-next-line:no-shadowed-variable
      }, error => {
          console.log(error);
          reject(error);
      });
    });
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) {  return this.userService.get(user.uid); }

        return Observable.of(null);
      });
  }



}
