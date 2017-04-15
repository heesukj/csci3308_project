import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the GroceryListPopover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-items-popover',
  templateUrl: 'list-items-popover.html'
})
export class ListItemsPopoverPage {

  listItems: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    console.log('ListItemsPopoverPage listItems', navParams.data.listItems);
    this.listItems = navParams.data.listItems;
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

  checkOffItem() {
    console.log('you should implement checkOffItem');
  }

  editQuantity() {
    console.log('you should implement editQuantity');
  }

  addNotification() {
    console.log('you should implement addNotification');
  }

  deleteItem() {
    console.log('you should implement deleteItem');
  }
}











// import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
//
// /*
//   Generated class for the ListItemsPopover page.
//
//   See http://ionicframework.com/docs/v2/components/#navigation for more info on
//   Ionic pages and navigation.
// */
// @Component({
//   selector: 'page-list-items-popover',
//   templateUrl: 'list-items-popover.html'
// })
// export class ListItemsPopoverPage {
//
//   constructor(public navCtrl: NavController, public navParams: NavParams) {}
//
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad ListItemsPopoverPage');
//   }
//
// }
