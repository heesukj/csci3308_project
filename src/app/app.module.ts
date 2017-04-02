import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CrudPage } from '../pages/crud/crud';
import { ListItemsPage } from '../pages/list-items/list-items';
import { TabsPage } from '../pages/tabs/tabs';
import { BackandService } from '../providers/backandService';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ListItemsPage,
    CrudPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ListItemsPage,
    CrudPage,
    TabsPage
  ],
  providers: [BackandService]
})
export class AppModule {}
