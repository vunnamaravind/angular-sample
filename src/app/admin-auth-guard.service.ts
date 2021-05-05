import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private  auth: AuthService, private userService: UserService) { }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  // @ts-ignore
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);


  }
}
