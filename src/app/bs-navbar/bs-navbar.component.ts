import {AuthService} from '../auth.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import 'firebase/database';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {AppUser} from '../model/app-user';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
// tslint:disable-next-line:align
export class BsNavbarComponent {
  appUser: AppUser;

  constructor( private  auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.auth.logout();
  }
}
