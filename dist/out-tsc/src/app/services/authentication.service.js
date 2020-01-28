import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
let AuthenticateService = class AuthenticateService {
    constructor() { }
    registerUser(value) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then(res => resolve(res), err => reject(err));
        });
    }
    loginUser(value) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then(res => resolve(res), err => reject(err));
        });
    }
    logoutUser() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut()
                    .then(() => {
                    console.log("LOG Out");
                    resolve();
                }).catch((error) => {
                    reject();
                });
            }
        });
    }
    userDetails() {
        return firebase.auth().currentUser;
    }
};
AuthenticateService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AuthenticateService);
export { AuthenticateService };
//# sourceMappingURL=authentication.service.js.map