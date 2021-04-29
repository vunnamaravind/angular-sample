import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {SigninData} from '../model/signinData';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private loginService: AuthService) {
  }


  // tslint:disable-next-line:typedef
  signInForm: NgForm | undefined;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.loginService.login();
  }

}

