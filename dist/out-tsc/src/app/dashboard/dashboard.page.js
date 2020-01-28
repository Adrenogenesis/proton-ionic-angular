import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DataService } from '.././data.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
let DashboardPage = class DashboardPage {
    constructor(navCtrl, authService, dataService, alertCtrl, toastCtrl, iab) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.files = this.dataService.getFiles();
    }
    addFile() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            (yield inputAlert).present();
        });
    }
    uploadInformation(text) {
        let upload = this.dataService.uploadToStorage(text);
        // Perhaps this syntax might change, it's no error here!
        upload.then().then(res => {
            this.dataService.storeInfoToDatabase(res.metadata).then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let toast = this.toastCtrl.create({
                    message: 'Element ajoute !',
                    duration: 3000
                });
                (yield toast).present();
            }));
        });
    }
    deleteFile(file) {
        this.dataService.deleteFile(file).subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let toast = this.toastCtrl.create({
                message: 'Element efface !',
                duration: 3000
            });
            (yield toast).present();
        }));
    }
    viewFile(url) {
        this.iab.create(url);
    }
    ngOnInit() {
        if (this.authService.userDetails()) {
            this.userEmail = this.authService.userDetails().email;
        }
        else {
            this.navCtrl.navigateBack('/login');
        }
    }
    logout() {
        this.authService.logoutUser()
            .then(res => {
            console.log(res);
            this.navCtrl.navigateBack('/login');
        })
            .catch(error => {
            console.log(error);
        });
    }
};
DashboardPage = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.page.html',
        styleUrls: ['./dashboard.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        AuthenticateService,
        DataService,
        AlertController, ToastController, InAppBrowser])
], DashboardPage);
export { DashboardPage };
//# sourceMappingURL=dashboard.page.js.map