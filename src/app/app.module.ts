import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CrudPage } from '../pages/crud/crud';
import { ListItemsPage } from '../pages/list-items/list-items';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { BackandService } from '../providers/backandService';
import { GroceryListPage } from '../pages/grocery-list/grocery-list';
import { GroceryListPopoverPage } from '../pages/grocery-list-popover/grocery-list-popover';
import { ListItemsPopoverPage } from '../pages/list-items-popover/list-items-popover';
import { UserPage } from '../pages/user/user';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ListItemsPage,
    CrudPage,
    TabsPage,
    StartPage,
    GroceryListPage,
    GroceryListPopoverPage,
    ListItemsPopoverPage,
    UserPage
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
    TabsPage,
    StartPage,
    GroceryListPage,
    GroceryListPopoverPage,
    ListItemsPopoverPage,
    UserPage
  ],
  providers: [BackandService]
})
export class AppModule {}
