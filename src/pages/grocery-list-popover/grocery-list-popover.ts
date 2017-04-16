import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { BackandService } from '../../providers/backandService';

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

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public backandService:BackandService) {
    console.log('GroceryListPopoverPage groceryList', navParams.data.groceryList);
    this.groceryList = navParams.data.groceryList;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GroceryListPopoverPage');
  //
  // }

  close() {
    this.viewCtrl.dismiss();
  }

  rename() {
    console.log('you should implement rename');
  }

  addReminder() {
    console.log('you should implement addReminder');
  }

  share() {
    console.log('you should implement share');
  }
// public delete(object: string, id: string) {
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
          },
          // 2nd argument is function to run when the operation fails
          err => this.backandService.logError(err),
          // 3rd operation is function to run when the observable is done (in
          // this case the asynchronous operation is the observable)
          () => console.log('OK')
      );
  }
}
