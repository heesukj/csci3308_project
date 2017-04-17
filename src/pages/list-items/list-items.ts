import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import {BackandService} from '../../providers/backandService';
import {ListItemsPopoverPage} from '../list-items-popover/list-items-popover';
import {AlertController} from 'ionic-angular';

/*
  Generated class for the ListItems page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-items',
  templateUrl: 'list-items.html'
})
export class ListItemsPage {
 // declare an object 'groceryList' with a type 'any'
  groceryList: any;
// items in array with a type 'any'
  items:any[] = [];
  searchQuery: string;
  userinfo: any;
  iteminfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public backandService:BackandService, public popoverCtrl:PopoverController, private alertCtrl: AlertController) {
    this.groceryList = navParams.get('groceryList');
    this.searchQuery = '';
    this.userinfo = this.backandService.getUsername();
    console.log(this.groceryList)

    // this.backandService.on("items_updated")
    //     .subscribe(
    //         data => {
    //             console.log("items_updated", data);
    //             let a = data as any[];
    //             let newItem = {};
    //             a.forEach((kv)=> newItem[kv.Key] = kv.Value);
    //             this.items.unshift(newItem);
    //         },
    //         err => {
    //             console.log(err);
    //         },
    //         () => console.log('received update from socket')
    // );

    // "this." means "A reference to the current class itself"
    // this.getItemsForList(this.groceryList.id); => means "a function call "getItemsForList" in the current class 'ListItemsPage'
    this.getItemsForList(this.groceryList.id);
    // this.getItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListItemsPage');
  }

  presentPopover(listItems) {
  // console.log('presentPopover', groceryList);
  //http://ionicframework.com/docs/api/components/popover/PopoverController/
  //groceryList is set as a navParam in GroceryListPopoverPage
    let popover = this.popoverCtrl.create(ListItemsPopoverPage,
                                            { listItems: listItems },
                                            { showBackdrop: true });
    popover.present();
    // PopoverController: The onDidDismiss(<func>) function can be called to set up a callback action that will be performed
    // after the popover is dismissed, receiving the parameter passed to dismiss().
    popover.onDidDismiss(this.popoverDismissed.bind(this));
  }
// popoverDismissed(callback) is defined here: when popover is closed
  public popoverDismissed(listItems) {
    // just refresh the list
    // arguments = print every arguments that are passed (number of args doesn't matter) in javascript
    console.log('popover dismissed called', arguments)
    this.getItemsForList(this.groceryList.id);
  }

//
  public checkOffItem(item) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    // this logs all the arguments passed to the function
    // console.log('in checkOffItem', arguments);
    // display 'log statement' in console for developers
    console.log('in checkOffItem', item);

    //toggle the value of checkedOff.  so if it is false set to true,
    //if it is true set it to false
    // we need to update this state (boolean) before calling update() function
    item.checkedOff = !item.checkedOff;

// post() (HTTP method call) = update(object: string, id: string, item: any, deep: boolean = false, returnObject: boolean = false)
// set deep = false: means "no need to check parent-child relationship for [foreign-key reference]"
// since we are doing simply checkedOff (true/false) condition
// set returnObject = true: means we ask to return the item(whole object) back to us

    this.backandService.update('items', item.id, item, false, true)
    .subscribe(
        // 1st argument is function (take data as a param) to run when the operation is a success
        // when I send post() the changes to server, server will make changes and and send the updated object back to UI
        data => {
            item = data; // safty guard code
            console.log('returned from update', data);  // optional code (doesn't change the state of your codes, just used as a reference for the development)

        },
        // 2nd argument is function to run when the operation fails
        err => this.backandService.logError(err),
        // 3rd operation is function to run when the observable is done (in
        // this case the asynchronous operation is the observable)
        () => console.log('OK')
    );
  }

// define a getItemsForList function, passing a param 'groceryListId'
  public getItemsForList(groceryListId) {
    // From 'backandService.ts':
    // getOne(object: string, id: string, deep: boolean = false, exclude: string[] = null, level: number = null)
    // Have to set a param 'deep = true' to enable to grap 'items in array' that are in foreignKey relationship with a list
    this.backandService.getOne('grocery_list', groceryListId, true)
         .subscribe(
             data => {
                 console.log('getOne', data);
                 this.items = data.items;
             },
             err => this.backandService.logError(err),
             () => console.log('OK')
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


      this.backandService.getList('items', null, null, filter)
          .subscribe(
              data => {
                  console.log("subscribe", data);
                  this.items = data;
              },
              err => this.backandService.logError(err),
              () => console.log('OK')
          );
  }

  public add()
  {
     let alert = this.alertCtrl.create({
       title: 'Add an Item',
       inputs: [
        {
          name: 'item',
          placeholder: 'Item Name'
        },
        {
          name: 'quantity',
          placeholder: 'Item Quantity',
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
          text: 'OK',
          handler: data => {
            let creation =
            [
              {
                list: this.groceryList.id,
                name: data.item,
                id: '',
                quantity: data.quantity,
                checkedOff: false
              }
            ];
            console.log(creation);
            this.backandService.create('items', creation)
              .subscribe(
                  data => {
                    console.log('Returned from create', data);
                    this.getItemsForList(this.groceryList.id);

                  },
                  err => this.backandService.logError(err)
                );
          }
        }
      ]
    });
    alert.present();
  }
  
}
