import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping2';

  constructor(private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('returnUrl');
        // @ts-ignore
        router.navigateByUrl(returnUrl);
      }
    });
  }

}
