import { Component } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { BackandService } from '../../providers/backandService';
import { NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
// 3) nav setup
import { ListItemsPage } from '../list-items/list-items';
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
  change: string; '';
  object: string; '';



  constructor(public viewCtrl: ViewController, public navParams: NavParams,public backandService:BackandService, private alertCtrl: AlertController) {
    console.log('GroceryListPopoverPage groceryList', navParams.data.groceryList);
    this.groceryList = navParams.data.groceryList;
    this.object = 'grocery_list';

    
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GroceryListPopoverPage');
  //
  // }
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
          console.log(this.change);
          console.log(this.object);
          console.log(this.groceryList.id);
          this.backandService.delete('grocery_list', this.groceryList.id);
          this.groceryList.name = this.change;
          console.log(this.groceryList.name);
          console.log(this.groceryList);
          this.backandService.create('grocery_list', this.groceryList);
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
    console.log('you should implement delete');
  }
}
