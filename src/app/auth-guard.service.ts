import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {CanActivate, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private  router: Router) { }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  canActivate(route, state: RouterStateSnapshot) {
    // @ts-ignore
    // @ts-ignore
    const map1 = this.auth.user$.map(user => {
      if (user) {  return true; }

      // @ts-ignore
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    });
  }
}
