import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, NavParams, ToastController } from 'ionic-angular';

// @IonicPage()
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})

export class WelcomePage {

    constructor(private afAuth: AngularFireAuth, private toast:ToastController, public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillLoad() {
        this.afAuth.authState.subscribe(data => {
            if(data.email && data.uid){
            this.toast.create({
                message: "Welcome to the care home app please add some favourites to your list",
                duration: 4000,
            }).present();
        }
            else    {
                this.toast.create({
                    message: "Please login to continue",
                    duration: 4000,
                }).present();
            }
        });
    }
}


