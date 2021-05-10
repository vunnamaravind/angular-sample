import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
//  import { AngularFirestoreModule } from '@angular/fire/firestore';
//  import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';
// @ts-ignore
import { config } from 'process';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {CategoryService} from './category.service';
import {ProductService} from './product.service';
import {UserService} from './user.service';
import {AdminAuthGuardService} from './admin-auth-guard.service';





const firebaseConfig = {
  apiKey: 'AIzaSyDZ5c0pHDTUHh4XUzXlf6LMIi-WOXZoiHU',
  authDomain: 'orange-kart-7743a.firebaseapp.com',
  projectId: 'orange-kart-7743a',
  storageBucket: 'orange-kart-7743a.appspot.com',
  messagingSenderId: '1017481973307',
  appId: '1:1017481973307:web:88ffafe78055ab3577961e'
};


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    MyOrdersComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase, firebaseConfig),
    //  AngularFirestoreModule, // firestore
    AngularFireDatabaseModule,
    AngularFireAuthModule, // auth
    //  AngularFireStorageModule // storage
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AngularFireDatabaseModule,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
