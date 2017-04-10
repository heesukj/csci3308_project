import { Component } from '@angular/core';
import 'rxjs/Rx'
import { NavController, NavParams } from 'ionic-angular';
import { BackandService } from '../../providers/backandService'
import { GroceryListPage } from '../grocery-list/grocery-list';

@Component({
  templateUrl: 'signup.html',
  selector: 'page-signup',
})
export class SignupPage {

  email:string = '';
  firstName:string = '';
  lastName:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private backandService:BackandService) {
  // constructor(private backandService:BackandService) {


  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    var $obs = this.backandService.signup(this.email, this.signUpPassword, this.confirmPassword, this.firstName, this.lastName);
    $obs.subscribe(
      data => {
          console.log('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
          this.navCtrl.setRoot(GroceryListPage);
      },
      err => {
        alert('Sign up failed');
        // TODO: Create a var to store a message for "signup fails here": i.e. Invalid email, Duplicate firstName, Invalid password
        console.error("error is", err);
          // this.backandService.logError(err)
      },
      () => console.log('Finish Auth'));
  }

  public socialSignin(provider) {
    var $obs = this.backandService.socialSignin(provider);
    $obs.subscribe(
        data => {
            console.log('Sign up succeeded with:' + provider);
        },
        err => {
            this.backandService.logError(err)
        },
        () => console.log('Finish Auth'));
  }

  public inAppSocial(provider) {
    var $obs = this.backandService.inAppSocial(provider);
    $obs.subscribe(
        data => {
            console.log('Sign up succeeded with:' + provider);
        },
        err => {
            this.backandService.logError(err)
        },
        () => console.log('Finish Auth'));
  }
}
