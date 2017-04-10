import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandService} from '../../providers/backandService';

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
 // declare an object
  groceryList: any;
  items:any[] = [];
  searchQuery: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backandService:BackandService) {
    this.groceryList = navParams.get('groceryList');
    this.searchQuery = '';

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
    this.getItemsForList(this.groceryList.id);
    // this.getItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListItemsPage');
  }

  public getItemsForList(groceryListId) {
    // getOne(object: string, id: string, deep: boolean = false, exclude: string[] = null, level: number = null)
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

  public getItems() {
     this.backandService.getList('items')
          .subscribe(
              data => {
                  console.log(data);
                  this.items = data;
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

}
