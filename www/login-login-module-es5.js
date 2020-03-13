function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Connexion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Votre nouveau projet.</ion-card-subtitle>\n    <ion-card-title>Envoie d'informations.</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    Votre projet peux être etudié rapidement. Pour cela il est nécessaire de crée un compte ici. Si vous avez déja un compte, les informations concernant votre projet \n    sont transmises ici.\n  </ion-card-content>\n</ion-card>\n\n<ion-content class=\"ion-padding\">\n <style>\n  ion-item {\n    border-radius:8px ;\n    margin-bottom: 5px;\n  }\n  </style>\n \n  <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"loginUser(validations_form.value)\">\n \n    <ion-item>\n      <ion-label  position=\"floating\" style=\"color: rgb(8, 37, 99);\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n \n    <ion-item>\n      <ion-label  position=\"floating\" style=\"color: rgb(8, 37, 99);\">Mot de passe</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n \n    <ion-button style=\"font-weight: bold;\" class=\"submit-btn\" type=\"submit\"  [disabled]=\"!validations_form.valid\">Connexion</ion-button>\n \n    <label class=\"error-message\">{{errorMessage}}</label>\n  </form>\n  <p style=\"color: white;\" class=\"go-to-register\">\n    Inscription :<br><br>\n     <a (click)=\"goToRegisterPage()\" style=\"color: rgb(8, 37, 99);\">Crée un compte.</a>\n  </p>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Set variables for all modes */\n:root {\n  /* Set the background of the entire app */\n  --ion-background-color: #ffffff75;\n}\nion-button {\n  --background: rgb(0, 81, 255);\n  --box-shadow: 5px 8px 2px black;\n  --z-index: 999;\n}\nion-content {\n  --ion-text-color: rgb(0, 0, 0);\n  --background: url(\"https://www.exonet3i.com/img/iphone_acrylic.jpg\") no-repeat center / cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bob2Jvcy9kZXYyL2lvdGFiMjAyMC9pb3RhYi9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBQ0E7RUFDUSx5Q0FBQTtFQUNBLGlDQUFBO0FDQ1I7QURHQTtFQUNRLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDQVI7QURHQTtFQUVRLDhCQUFBO0VBQ0EsNkZBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCB2YXJpYWJsZXMgZm9yIGFsbCBtb2RlcyAqL1xuOnJvb3Qge1xuICAgICAgICAvKiBTZXQgdGhlIGJhY2tncm91bmQgb2YgdGhlIGVudGlyZSBhcHAgKi9cbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjc1O1xuICAgICAgICAgICAgXG4gICAgICB9XG4gICAgICBcbmlvbi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDAsIDgxLCAyNTUpO1xuICAgICAgICAtLWJveC1zaGFkb3c6IDVweCA4cHggMnB4IGJsYWNrO1xuICAgICAgICAtLXotaW5kZXg6IDk5OTtcbiAgICB9XG5cbmlvbi1jb250ZW50e1xuICAgICAgIC8vIC0tYmFja2dyb3VuZDogICNlZWU0ZmY7ICAgICAgICAgXG4gICAgICAgIC0taW9uLXRleHQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAgdXJsKFwiaHR0cHM6Ly93d3cuZXhvbmV0M2kuY29tL2ltZy9pcGhvbmVfYWNyeWxpYy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xuICB9XG4iLCIvKiBTZXQgdmFyaWFibGVzIGZvciBhbGwgbW9kZXMgKi9cbjpyb290IHtcbiAgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBlbnRpcmUgYXBwICovXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY3NTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDAsIDgxLCAyNTUpO1xuICAtLWJveC1zaGFkb3c6IDVweCA4cHggMnB4IGJsYWNrO1xuICAtLXotaW5kZXg6IDk5OTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi10ZXh0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly93d3cuZXhvbmV0M2kuY29tL2ltZy9pcGhvbmVfYWNyeWxpYy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _login_page_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.page.scss */
    "./src/app/login/login.page.scss");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(navCtrl, authService, formBuilder) {
        _classCallCheck(this, LoginPage);

        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.validation_messages = {
          'email': [{
            type: 'required',
            message: 'Email requis.'
          }, {
            type: 'pattern',
            message: 'Entrez un email valide.'
          }],
          'password': [{
            type: 'required',
            message: 'Mot de passe requis.'
          }, {
            type: 'minlength',
            message: 'Le mot de passe doit comporter au moins de 5 caracteres.'
          }]
        };
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(value) {
          var _this = this;

          this.authService.loginUser(value).then(function (res) {
            console.log(res);
            _this.errorMessage = "";

            _this.navCtrl.navigateForward('/dashboard');
          }, function (err) {
            _this.errorMessage = err.message;
          });
        }
      }, {
        key: "goToRegisterPage",
        value: function goToRegisterPage() {
          this.navCtrl.navigateForward('/register');
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map