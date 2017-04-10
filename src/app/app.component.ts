import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { SignupPage} from '../pages/signup/signup';
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';

import {BackandService} from '../providers/backandService'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = SignupPage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, private backandService:BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      backandService.setIsMobile(platform.is('mobile'));
      backandService.setAppName('gwm2');
      backandService.setSignUpToken('df0cc272-ba30-4c7b-bde3-919803469efa');
      backandService.setAnonymousToken('a1b0c320-55f9-4228-a29c-51c47612b468');

      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      { title: 'SignUp Page', component: SignupPage },
{ title: 'Login', component: LoginPage },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
