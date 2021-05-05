import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {OrderSucessComponent} from './order-sucess/order-sucess.component';
import {LoginComponent} from './login/login.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';

import {AuthGuardService} from './auth-guard.service';
import {ProductFormComponent} from './admin/product-form/product-form.component';
import {AdminAuthGuardService} from './admin-auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},

  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  {path: 'order-sucess', component: OrderSucessComponent, canActivate: [AuthGuardService] },
  {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},

  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},


  {path: 'admin/products/new', component: ProductFormComponent , canActivate: [AuthGuardService]},
  {path: 'admin/products/id', component: ProductFormComponent , canActivate: [AuthGuardService]},
  {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
