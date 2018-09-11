import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from 'angularfire2/auth';
import { AboutPage } from '../about/about';

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  user = {} as User;
  constructor( private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

async signup (user: User) {
  try {
  const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  if (result) {
    this.navCtrl.push(AboutPage);
  console.log(result);
}
    }
  catch (e) {
    console.error(e);
  }
  }
}
