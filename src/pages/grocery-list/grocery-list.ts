import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { BackandService } from '../../providers/backandService';
// 3) nav setup
import { ListItemsPage } from '../list-items/list-items';
import { GroceryListPopoverPage } from '../grocery-list-popover/grocery-list-popover';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public backandService:BackandService, public popoverCtrl: PopoverController) {

    this.searchQuery = '';
    this.getGroceryList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroceryListPage');
  }

// define add() = (+: button) function here
  public add() {
    console.log('you should implement add');
  }

// 2) nav setup: define a function 'listSelected' passing a param 'groceryList'
  listSelected(groceryList) {
  	//alert(item.text); instead 'alerting', we tell our navCtrl to push instances of our detail page into the navigation stack by conveiently assigning the constructor argument to the currrent instances of the class we are in, passing DetailPage
    //groceryList is set as a navParam in ListItemsPage
    this.navCtrl.push(ListItemsPage, {
  		groceryList: groceryList
  	});
  }
//groceryList is passed as a navParam
  presentPopover(groceryList) {
    // console.log('presentPopover', groceryList);
    //http://ionicframework.com/docs/api/components/popover/PopoverController/
    //groceryList is set as a navParam in GroceryListPopoverPage
    let popover = this.popoverCtrl.create(GroceryListPopoverPage,
                                         { groceryList: groceryList },
                                         { showBackdrop: true });
    popover.present();
    // event is passing around.
    // onDidDismiss (callback): when popover is dismissed, let me know by calling this.popoverDismissed
    // 'this' registers a callback.  When popoever.dismiss() (close() function in grocery-list-popover.ts) is called,
    // the popover will notify this class by calling this.popoverDismissed.
    // So this.popoverDismissed is a callback for the popover.dismiss() event
    // 'bind(this)'' binds this function to the current "this" CONTEXT (this class)

    // we have to call 'bind() function on 'this' whenevery there is "on" like 'on'DidDismiss()
    //that registers for callback (whenever a func deals with another func and/ an event register)
    // 'this' in bind(this) refers to the current function (= presentPopover) that contains this bind() function.
    popover.onDidDismiss(this.popoverDismissed.bind(this));
  }
// popoverDismissed(callback) is defined here: when popover is closed
  public popoverDismissed(groceryList) {
    // just refresh the list
    // arguments = print every arguments that are passed (number of args doesn't matter) in javascript
    console.log('popover dismissed called', arguments)
    this.getGroceryList();
  }

  public getGroceryList() {
     this.backandService.getList('grocery_list')
          .subscribe(
              data => {
                  console.log(data);
                  this.groceryLists = data;
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

}
