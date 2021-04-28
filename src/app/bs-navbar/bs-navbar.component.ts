import {AuthService} from '../auth.service';
import { Component, OnInit } from '@angular/core';
import 'firebase/database';




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  constructor( public  afAuth: AuthService) {
  }
  // @ts-ignore
  authenticationService: any;

  // @ts-ignore
  private auth: any;

  // tslint:disable-next-line:typedef
  user$: any;


  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.auth.logout();
  }
}
