import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StallSearchComponent } from './components/user/search/stallsearch.component';
import { DiaryComponent } from './components/user/diary/diary.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FoodSearchComponent } from './components/user/search/foodsearch.component';
import { LoginComponent } from './shared/security/login/login.component';
import { RegistrationComponent } from './shared/security/registration/registration.component';
import { ChangePasswordComponent } from './shared/security/change-password/change-password.component';
import { ResetPasswordComponent } from './shared/security/reset-password/reset-password.component';
import { ResetChangepasswordComponent } from './shared/security/reset-changepassword/reset-changepassword.component';

import { MaterialModule } from './material.module';
import { RoutingModule } from './app.routing';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { ActionService } from './shared/services/action.service';




@NgModule({
  declarations: [
    AppComponent,
    StallSearchComponent,
    DiaryComponent,
    ProfileComponent,
    HeaderComponent,
    FoodSearchComponent,
    LoginComponent,
    RegistrationComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ResetChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [ActionService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
