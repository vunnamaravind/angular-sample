import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private  router: Router) { }


  // @ts-ignore
  // tslint:disable-next-line:typedef
  canActivate(route, state: RouterStateSnapshot) {
    const map1 = this.auth.user$.map(user => {
      if (user) {  return true; }

      // @ts-ignore
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    });
  }
}
