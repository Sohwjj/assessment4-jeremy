import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DiaryComponent } from './components/user/diary/diary.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { StallSearchComponent } from './components/user/search/stallsearch.component';
import { FoodSearchComponent } from './components/user/search/foodsearch.component';
import { LoginComponent } from './shared/security/login/login.component';
import { RegistrationComponent } from './shared/security/registration/registration.component';

const appRoutes = [
  {
    path: '',
    component: DiaryComponent
  },
  {
    path: 'diary',
    component: DiaryComponent
  },
  {
    path: 'foodsearch',
    component: FoodSearchComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'stallsearch',
    component: StallSearchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];


@NgModule({
  declarations: [],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: []
  })
export class RoutingModule { }