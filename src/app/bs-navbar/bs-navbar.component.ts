import {AuthService} from '../auth.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import 'firebase/database';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebase.User | null>;

  constructor( public  afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }
  auth: any;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.afAuth.signOut();
  }
}
