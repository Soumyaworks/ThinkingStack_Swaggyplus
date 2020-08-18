import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Component/user/user.component';
import { AdminComponent } from './Component/admin/admin.component';
import { RestaurantComponent } from './Component/restaurant/restaurant.component';
import { CartComponent } from './Component/cart/cart.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AddRestaurantComponent } from './Component/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './Component/edit-restaurant/edit-restaurant.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { DishComponent } from './component/dish/dish.component';
import { AdminRegistrationComponent } from './Component/admin-registration/admin-registration.component';
import { SearchSpaceComponent } from './component/search-space/search-space.component';
import { DummySearchComponent } from './Component/dummy-search/dummy-search.component';
import { Body2Component } from './body2/body2.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { UserCartComponent } from './Component/user-cart.component';
import { NewDishComponent } from './Component/new-dish/new-dish.component';
import { UpdatedMenuComponent } from './Component/updated-menu/updated-menu.component';
import { UpdatedRestaurantComponent } from './Component/updated-restaurant/updated-restaurant.component';
import { AdminEntryComponent } from './Component/admin-entry/admin-entry.component';
import { CartAddComponent } from './Component/cart-add/cart-add.component';
import { BuyDishComponent } from './Component/buy-dish/buy-dish.component';
import { FooterChangeComponent } from './Component/footer-change/footer-change.component';
import { UserEntryComponent } from './Component/user-entry/user-entry.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    RestaurantComponent,
    CartComponent,
    UserLoginComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    UserRegistrationComponent,
    DishComponent,
    AdminRegistrationComponent,
    SearchSpaceComponent,
    DummySearchComponent,
    Body2Component,
    NewAdminComponent,
    UserCartComponent,
    NewDishComponent,
    UpdatedMenuComponent,
    UpdatedRestaurantComponent,
    AdminEntryComponent,
    CartAddComponent,
    BuyDishComponent,
    FooterChangeComponent,
    UserEntryComponent,
    NewUserComponent,
    NewRestaurantComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
