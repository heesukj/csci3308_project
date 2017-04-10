import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BackandService } from '../../providers/backandService';
import { ListItemsPage } from '../list-items/list-items';
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

  groceryLists:any[] = [];
  searchQuery: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backandService:BackandService) {

    this.searchQuery = '';
    this.getGroceryList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroceryListPage');
  }

  public add() {
    console.log('you should implement add');
  }

  listSelected(groceryList) {
  	//alert(item.text); instead 'alerting', we tell our navCtrl to push instances of our detail page into the navigation stack by conveiently assigning the constructor argument to the currrent instances of the class we are in, passing DetailPage
  	this.navCtrl.push(ListItemsPage, {
  		groceryList: groceryList
  	});
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
