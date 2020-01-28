import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DataService } from '.././data.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  files: Observable<any[]>;
  userEmail: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private dataService: DataService,
    private alertCtrl: AlertController, private toastCtrl: ToastController, private iab: InAppBrowser) { 
    this.files = this.dataService.getFiles();
  }

  async addFile() {
    let inputAlert = this.alertCtrl.create({
      //title: 'Store new information',
      inputs: [
        {
          name: 'info',
          placeholder: 'Vos informations...'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Sauver',
          handler: data => {
            this.uploadInformation(data.info);
          }
        }
      ]
    });
    (await inputAlert).present();
  }


  uploadInformation(text: string) {
    let upload = this.dataService.uploadToStorage(text);
 
    // Perhaps this syntax might change, it's no error here!
    upload.then().then(res => {
      this.dataService.storeInfoToDatabase(res.metadata).then(async () => {
        let toast = this.toastCtrl.create({
          message: 'Element ajoute !',
          duration: 3000
        });
        (await toast).present();
      });
    });
  }

  deleteFile(file: any) {
    this.dataService.deleteFile(file).subscribe(async () => {
      let toast = this.toastCtrl.create({
        message: 'Element efface !',
        duration: 3000
      });
      (await toast).present();
    });
  }
 
  viewFile(url: any) {
    this.iab.create(url);
  }


  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('/login');
    }
  }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('/login');
    })
    .catch(error => {
      console.log(error);
    })
  }

}
