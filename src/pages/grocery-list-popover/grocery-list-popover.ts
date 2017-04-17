import { Component } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { BackandService } from '../../providers/backandService';
import { NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
// 3) nav setup
import { ListItemsPage } from '../list-items/list-items';
import { Events } from 'ionic-angular';

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
//groceryList is provided in the navParams
  groceryList: any;
  change: string; '';
  object: string; '';

  constructor(public viewCtrl: ViewController, public navParams: NavParams,public backandService:BackandService, private alertCtrl: AlertController, public events: Events) {
    console.log('GroceryListPopoverPage groceryList', navParams.data.groceryList);
    this.groceryList = navParams.data.groceryList;
    this.object = 'grocery_list';
  }

  presentPrompt() {

  }

  close() {
    this.viewCtrl.dismiss();
  }

  rename() {
    let alert = this.alertCtrl.create({
    title: 'New List Name',
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
          this.change = data.newName;
          this.delete();
          this.groceryList.name = this.change;
          // grocery_list is a table we created in model.json
          this.backandService.create('grocery_list', this.groceryList)
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
  alert.present();
  this.viewCtrl.dismiss();
  }

  addReminder() {
    console.log('you should implement addReminder');
  }

  share() {
    console.log('you should implement share');
  }

  delete() {
    console.log('deleting', this.groceryList);
    // grocery_list is a table we created in model.json
    this.backandService.delete('grocery_list', this.groceryList.id)
    // subscribe to response from the server so we are notified when the asynchronous result is available
      .subscribe(
          // 1st argument is function to run when the operation is a success
          data => {
              console.log('returned from delete', data);
              //close the popover
              this.close();
              this.events.publish('finished', data);
          },
          // 2nd argument is function to run when the operation fails
          err => this.backandService.logError(err),
          // 3rd operation is function to run when the observable is done (in
          // this case the asynchronous operation is the observable)
          () => console.log('OK')
      );
  }
}
