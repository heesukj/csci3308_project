import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { UserPage } from '../user/user';

/*
  Generated class for the Start page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');

  }

  gotoSignUp() {
    this.navCtrl.push(SignupPage);
  }

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }
  gotoUser(){
	  this.navCtrl.push(UserPage);
  }

  slides = [
    {
      //IMAGE SIZE MUST BE 412x370px
      title: "Add Items",
      description: "Users can easily add any items to their lists by pressing the + button!",
      image: "assets/images/additems.gif"
    },
    {
      //IMAGE SIZE MUST BE 412x370px
      title: "Long Press",
      description: "Long presses on items will display a popup with more options!",
      image: "assets/images/press.gif"
    },
    {
      //IMAGE SIZE MUST BE 412x370px
      title: "Easily Share With Anyone!", 
      description: "Our built in share button will give anyone you specify access to a list in <b>real time</b>!",
    },

    {
      //IMAGE SIZE MUST BE 412x370px
      title: "Edit and Remove", 
      description: "Need to change or remove an item? Just long press on the item and select your corresponding need!",
      image: "assets/images/renameitem.gif"
    },

    {
      //IMAGE SIZE MUST BE 412x370px
      title: "Mark Items Bought",
      description: "Tapping an item within a list marks the item as complete!",
      image: "assets/images/markitem.gif"

    }
  ];


}
  