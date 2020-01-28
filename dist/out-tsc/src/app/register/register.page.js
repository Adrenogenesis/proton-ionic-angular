import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
let RegisterPage = class RegisterPage {
    constructor(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])),
        });
    }
    tryRegister(value) {
        this.authService.registerUser(value)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.successMessage = "Your account has been created. Please log in.";
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.successMessage = "";
        });
    }
    goLoginPage() {
        this.navCtrl.navigateBack('');
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        AuthenticateService,
        FormBuilder])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map