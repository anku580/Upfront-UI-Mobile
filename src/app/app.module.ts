import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { baseURL } from './shared/baseURL';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import 'hammerjs';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor, UnauthorizedInterceptor } from './service/auth.interceptor';

import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule,MatBottomSheetModule, MatMenuModule
} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';

import { NearbyRestaurantService } from './service/nearby-restaurant.service';
import { RestaurantDetailService } from './service/restaurant-detail.service';
import { CartService } from './service/cart.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { CustomizationComponent } from './customization/customization.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MultipleBranchComponent } from './multiple-branch/multiple-branch.component';
import {MatBadgeModule} from '@angular/material/badge';
import { OrderHistoryDetailsComponent } from './order-history-details/order-history-details.component';
import { OffersComponent } from './offers/offers.component';
import {MatStepperModule} from '@angular/material/stepper';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';


const routes : Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate : [AuthGuard]},
  { path: 'cart', component: CartComponent},
  { path: 'restaurant/:id', component: RestaurantDetailComponent},
  { path: 'favourites', component: FavouritesComponent},
  { path: 'profile', component: ProfileComponent, },
  { path: 'orderhistory', component: OrderHistoryComponent},
  { path: 'offers', component : OffersComponent},
  { path: 'welcomePage', component: WelcomePageComponent},
  { path: 'payment', component: PaymentComponent },
  { path: 'payment/type', component: PaymentmodeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    FavouritesComponent,
    ProfileComponent,
    OrderHistoryComponent,
    RestaurantDetailComponent,
    CustomizationComponent,
    SnackbarComponent,
    MultipleBranchComponent,
    OrderHistoryDetailsComponent,
    OffersComponent,
    WelcomePageComponent,
    PaymentComponent,
    PaymentmodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,MatSnackBarModule,MatBadgeModule,MatStepperModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,MatSidenavModule,MatTabsModule,MatBottomSheetModule,
    MatMenuModule, HttpClientModule,
    RouterModule.forRoot(
      routes, {
        enableTracing: true
      }
    ),
    ScrollDispatchModule,
  ],
  providers: [{ provide : 'baseURL', useValue : baseURL},
  // {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UnauthorizedInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  NearbyRestaurantService,
  RestaurantDetailService,
  CartService,
  AuthGuardService 
],
  bootstrap: [AppComponent],
  entryComponents : [CustomizationComponent, SnackbarComponent, CartComponent, FooterComponent, MultipleBranchComponent]
})
export class AppModule { }
