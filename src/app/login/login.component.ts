import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private router: any;

  constructor(public afAuth: AuthService, private loginService: AuthService) {
  }


  // tslint:disable-next-line:typedef
  signInForm: NgForm | undefined;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.loginService.login().then(res => {
      this.router.navigate(['/user']);
    });
  }

}

