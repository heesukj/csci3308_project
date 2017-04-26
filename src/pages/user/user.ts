import { Component } from '@angular/core';
import 'rxjs/Rx'
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  templateUrl: 'user.html',
  selector: 'page-user',
})
export class UserPage {
  constructor(public navCtrl: NavController, public navParams: NavParams)
{

}
  slides = [
    {
      title: "Welcome to Grocery With Me!",
      description: "The <b>Grocery With Me</b> application provides easy access for any user to update their shopping list from anywhere! ",
      image: "assets/images/info.png",
    },

    {
      title: "Juan Vargas",
      description: "<b>Juan Vargas</b> is a Computer Science Engineering major student",
      image: "assets/images/boy.png",
    },
    {
      title: "Heesuk Jang",
      description: "<b>Heesuk Jang</b> is a Computer Science Engineering  major student",
      image: "assets/images/girl.png",
    },
    {
      title: "Seungjeong Park", 
      description: "<b>Seungjeong Park</b> is a Electrical&Computer Engineering  major student",
      image: "assets/images/boy.png",
    },

    {
      title: "Jake Hallberg", 
      description: "<b>Jake Hallberg</b> is a Computer Science Engineering major student",
      image: "assets/images/boy.png",
    },

    {
      title: "Hanye Han",
      description: "<b>Hanye Han</b> is a Computer Science Engineering major student",
      image: "assets/images/boy.png",
    }
  ];

    gotoLogin() {
      this.navCtrl.push(LoginPage);
}
}
