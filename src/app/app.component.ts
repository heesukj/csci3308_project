import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import {BackandService} from '../providers/backandService'

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, private backandService:BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      backandService.setIsMobile(platform.is('mobile'));
      // backandService.setAppName('gwm');
      // backandService.setSignUpToken('b3bb4832-b36f-4056-880f-2f285d3486b2');
      // backandService.setAnonymousToken('bd14a5a2-637b-434f-a76d-f8faabef17b3');

      backandService.setAppName('gwm2');
      backandService.setSignUpToken('df0cc272-ba30-4c7b-bde3-919803469efa');
      backandService.setAnonymousToken('a1b0c320-55f9-4228-a29c-51c47612b468');

    });
  }
}
