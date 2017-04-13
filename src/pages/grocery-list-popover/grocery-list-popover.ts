import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the GroceryListPopover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grocery-list-popover',
  templateUrl: 'grocery-list-popover.html'
})
export class GroceryListPopoverPage {

  groceryList: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    console.log('GroceryListPopoverPage groceryList', navParams.data.groceryList);
    this.groceryList = navParams.data.groceryList;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GroceryListPopoverPage');
  //
  // }

  close() {
    this.viewCtrl.dismiss();
  }

  rename() {
    console.log('you should implement rename');
  }

  addReminder() {
    console.log('you should implement addReminder');
  }

  share() {
    console.log('you should implement share');
  }

  delete() {
    console.log('you should implement delete');
  }
}
