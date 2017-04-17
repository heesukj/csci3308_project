import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { BackandService } from '../../providers/backandService';



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
  iteminfo: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private alertCtrl: AlertController, public backandService:BackandService) {
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
    let alert = this.alertCtrl.create({
    title: 'Rename Item',
    inputs: [
      {
        name: 'newName',
        placeholder: ''
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Rename',
        handler: data =>{
          this.iteminfo = data.newName;
          //this.delete();
          this.listItems.name;
          console.log(this.listItems);
          // grocery_list is a table we created in model.json
          this.backandService.create('item', this.listItems)
            .subscribe(
              data => {
                console.log('Returned from create', data);
              },
              err => this.backandService.logError(err),
              () => console.log('OK')
            );
        }
      }
    ]
  });
  this.viewCtrl.dismiss();
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
