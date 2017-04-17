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
    title: 'Create A New List',
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
        text: 'Create!', 
        handler: data =>{
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
              err => this.backandService.logError(err),
            );
        }
      }
    ]
  });
  alert.present();
}

}
