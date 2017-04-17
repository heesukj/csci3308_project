import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { BackandService } from '../../providers/backandService';
// 3) nav setup
import { ListItemsPage } from '../list-items/list-items';
import { GroceryListPopoverPage } from '../grocery-list-popover/grocery-list-popover';
import {AlertController} from 'ionic-angular';

/*
  Generated class for the GroceryList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grocery-list',
  templateUrl: 'grocery-list.html'
})
export class GroceryListPage {
  // declare groceryLists in array with a type 'any'
  groceryLists: any[] = [];
  searchQuery: string;
  // User's Name for Display at header
  loggedInUser: string = '';
  public loggedInUserInfo: any;
  public items:any[] = [];
  create: string; '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public backandService:BackandService, public popoverCtrl: PopoverController, private alertCtrl: AlertController) {

    this.searchQuery = '';
    this.getGroceryList();
    this.loggedInUser = this.backandService.getUsername();

    let filter =
          [
            {
              fieldName: 'email',
              operator: 'contains',
              value: this.loggedInUser
            }
          ]
      ;


      this.backandService.getList('users', null, null, filter)
          .subscribe(
              data => {
                  this.loggedInUserInfo = data;
                  this.create = this.loggedInUserInfo.id;
                  console.log(this.create);
              },
              err => this.backandService.logError(err),
          );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroceryListPage');
  }

// define add() = (+: button) function here
  public add() {
     let creation =
      [
        {
          id: '',
          items: null,
          name: 'name',
          completed: null,
          user: this.loggedInUserInfo[0].id

        }
      ];
      console.log(creation);


   let alert = this.alertCtrl.create({
    title: 'Create A New List',
    inputs: [
      {
        name: 'ListName',
        placeholder: 'List Name'
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
        text: 'Create!', 
        handler: data =>{
        let creation =
      [
        {
          id: '',
          items: null,
          name: data.ListName,
          completed: null,
          user: this.loggedInUserInfo[0].id

        }
      ];
          this.loggedInUserInfo;
          // grocery_list is a table we created in model.json
          this.backandService.create('grocery_list', creation)
            .subscribe(
              data => {
                console.log('Returned from create', data);
                this.getGroceryList();
              },
              err => this.backandService.logError(err),
            );
        }
      }
    ]
  });
  alert.present();
  }

// 2) nav setup: define a function 'listSelected' passing a param 'groceryList'
  listSelected(groceryList) {
  	//alert(item.text); instead 'alerting', we tell our navCtrl to push instances of our detail page into the navigation stack by conveiently assigning the constructor argument to the currrent instances of the class we are in, passing DetailPage
    //groceryList is set as a navParam in ListItemsPage
    this.navCtrl.push(ListItemsPage, {
  		groceryList: groceryList
  	});
  }

  presentPopover(groceryList) {
    // console.log('presentPopover', groceryList);
    //http://ionicframework.com/docs/api/components/popover/PopoverController/
    //groceryList is set as a navParam in GroceryListPopoverPage
    let popover = this.popoverCtrl.create(GroceryListPopoverPage,
                                         { groceryList: groceryList },
                                         { showBackdrop: true });
    popover.present();

  }

  public getGroceryList() {
     this.backandService.getList('grocery_list')
          .subscribe(
              data => {
                  this.groceryLists = data;
                  console.log(this.groceryLists);
              },
              err => this.backandService.logError(err),
          );
  }

  public filterItems(searchbar) {
      // set q to the value of the searchbar
      var q = searchbar;

      // if the value is an empty string don't filter the items
      if (!q || q.trim() == '') {
        return;
      }
      else{
          q = q.trim();
      }

      let filter =
          [
            {
              fieldName: 'name',
              operator: 'contains',
              value: q
            }
          ]
      ;


      this.backandService.getList('grocery_list', null, null, filter)
          .subscribe(
              data => {
                  console.log("subscribe", data);
                  this.groceryLists = data;
              },
              err => this.backandService.logError(err),
              () => console.log('OK')
          );
  }
   public getItems() {
       this.backandService.getList('users')
            .subscribe(
                data => {
                    console.log(data);
                    this.items = data;
                    this.loggedInUser = data.firstName;
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
    }
}
