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
//listItems is provided in the navParams
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

  editQuantity() {
    console.log('you should implement editQuantity');
  }

  addNotification() {
    console.log('you should implement addNotification');
  }

  deleteItem() {
    // console.log('you should implement deleteItem');
    console.log('deleting', this.listItems);
    // items is a table we created in model.json
    // public delete(object: string, id: string) { <= from backandService.ts
    this.backandService.delete('items', this.listItems.id)
    // subscribe to response from the server so we are notified when the asynchronous result is available
      .subscribe(
          // 1st argument is function to run when the operation is a success
          data => {
              console.log('returned from delete', data);
              //close the popover
              this.close();
          },
          // 2nd argument is function to run when the operation fails
          err => this.backandService.logError(err),
          // 3rd operation is function to run when the observable is done (in
          // this case the asynchronous operation is the observable)
          () => console.log('OK')
      );
  }

}
