webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Acceuil" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Reglages" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DATABASE_FILE_NAME = 'data.db';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, sqlite, actionSheetController, platform, alertController, modalController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.alertController = alertController;
        this.modalController = modalController;
        this.button_value = "Ajouter une annonce";
        this.actif = false;
        this.annonces = [];
        this.items = [];
        this.dbCreated = false;
        this.timer = setInterval(function () {
            _this.nom = localStorage.getItem("nom");
            _this.prenom = localStorage.getItem("prenom");
            _this.email = localStorage.getItem("email");
            _this.initializeItems();
        }, 1000);
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dbCreated) {
            this.platform.ready().then(function () {
                _this.createDatabaseFile();
            });
        }
    };
    ///////////////////////////////////////////////////////////////////////////////
    ProfilePage.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('Bdd créée !');
            _this.db = db;
            _this.createTables();
            _this.dbCreated = true;
        })
            .catch(function (e) { return console.log(e); });
    };
    ProfilePage.prototype.createTables = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `ANNONCES` ( `idAnnonce` INTEGER NOT NULL, `name` TEXT NOT NULL,  `desc` TEXT, `prix` INTEGER , `proprietaire` TEXT, PRIMARY KEY(`idAnnonce`))', {})
            .then(function () {
            console.log('Table Annonces created !');
            _this.initializeItems();
        })
            .catch(function (e) { return console.log(e); });
    };
    ProfilePage.prototype.initializeItems = function () {
        var _this = this;
        this.annonces = [];
        console.log(this.email);
        this.db.executeSql('SELECT*  FROM `ANNONCES` WHERE proprietaire=?', [this.email])
            .then(function (data) {
            if (data != null && data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.annonces.push({ "id": data.rows.item(i).idAnnonce, "name": data.rows.item(i).name, "details": data.rows.item(i).desc, "prix": data.rows.item(i).prix, "proprietaire": data.rows.item(i).proprietaire });
                    }
                    _this.items = _this.annonces;
                }
            }
            ;
        });
    };
    ProfilePage.prototype.ajouterAnnonce = function () {
        this.button_value = "Desactiver l'ajout";
        this.actif = !this.actif;
    };
    ProfilePage.prototype.saveAnnonce = function () {
        var _this = this;
        this.db.executeSql('INSERT INTO `Annonces`(name, desc,prix,proprietaire) VALUES (\'' + this.nomAnn + '\', \'' + this.details + '\', \'' + this.prix + '\', \'' + this.email + '\')', {})
            .then(function () {
            console.log('Annonce inserted !');
            _this.initializeItems();
        })
            .catch(function (e) { return console.log(e); });
    };
    ProfilePage.prototype.saveAnnonce1 = function (nom, details, proprietaire, prix) {
        this.db.executeSql('INSERT INTO `Annonces`(name, desc,prix,proprietaire) VALUES (\'' + nom + '\', \'' + details + '\', \'' + prix + '\', \'' + this.email + '\')', {})
            .then(function () { return console.log('Annonce inserted !'); })
            .catch(function (e) { return console.log(e); });
    };
    ProfilePage.prototype.getItems = function () {
        this.items = this.annonces;
    };
    ProfilePage.prototype.presentActionSheet = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            title: 'Options',
                            buttons: [{
                                    text: 'Supprimer',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.supprimer(item.id);
                                    }
                                }, {
                                    text: 'Modifier',
                                    icon: 'edit',
                                    handler: function () {
                                        _this.modifAnnonce({ "id": item.id, "name": item.name, "details": item.details, "prix": item.prix });
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.supprimer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                alert = this.alertController.create({
                    title: "Suppression de l'annonce",
                    message: "Vous allez supprimer cette annonce ?<br/>Cette op\u00E9ration est irrevrsible",
                    buttons: [
                        {
                            text: 'Annuler',
                            role: 'annuler',
                        },
                        {
                            text: 'Confirmer',
                            role: 'confirmer',
                            handler: function () {
                                _this.deleteAnnoce(id);
                            }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.deleteAnnoce = function (id) {
        var _this = this;
        console.log(id);
        var sql = "DELETE FROM ANNONCES WHERE idAnnonce = " + id;
        console.log(sql);
        this.db.executeSql(sql, [])
            .then(function (res) {
            alert("Annonce supprimé avec succès!");
            _this.initializeItems();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    ProfilePage.prototype.modifAnnonce = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: 'Modifier une annonce',
                            message: "Enter le nouveau nom de l'annonce",
                            inputs: [
                                {
                                    name: 'nom',
                                    placeholder: item.name,
                                    value: item.name
                                },
                                {
                                    name: 'details',
                                    placeholder: item.details,
                                    value: item.details
                                },
                                {
                                    name: 'prix',
                                    placeholder: item.prix.toString(),
                                    value: item.prix.toString()
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Anneuler',
                                    handler: function (data) {
                                    }
                                },
                                {
                                    text: 'Confirmer',
                                    handler: function (data) {
                                        _this.edit({ "id": item.id, "nom": data.nom, "details": data.details, "prix": data.prix });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.edit = function (item) {
        var _this = this;
        var sqlText = "UPDATE Annonces SET (name , desc ) = ( ? , ? ,? ) where idAnnonce = ? ;";
        var values = [item.nom, item.details || null, item.prix || null, item.id];
        this.db.executeSql(sqlText, values).then(function (res) {
            alert("Annonce modifié avec succès!");
            _this.initializeItems();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
        ;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-title>profile</ion-title>\n    <ion-searchbar (ionInput)="getItems($event)" [debounce]="500" placeholder="search..."></ion-searchbar>\n    </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="email!=null">\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Nom</ion-label>\n        <ion-label>{{nom}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Prenom</ion-label>\n        <ion-label>{{prenom}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-label>{{email}}</ion-label>\n      </ion-item>\n\n\n\n    </ion-card-content>\n\n\n  </ion-card>\n  \n<h3 style="text-align: center;">Mes annonces</h3>\n<ion-card *ngFor="let item of items">\n  <ion-item>\n  \n    <button style="float:right ;"  ion-button clear (click)="presentActionSheet(item)">\n      <ion-icon name="trash-outline" style="padding: 5px;"></ion-icon>\n     Option\n    </button>\n  </ion-item>\n\n  <ion-card-content>\n    <ion-item>   \n      <ion-label>Titre</ion-label>\n      <ion-label>\n      {{item.name}}\n      </ion-label></ion-item> \n      <ion-item>  \n        <ion-label>Details</ion-label><br>\n          <ion-label> {{item.details}}</ion-label><br>\n        </ion-item> \n      <ion-item>  \n    <ion-label>prix</ion-label><br>\n      <ion-label> {{item.prix}}</ion-label><br>\n    </ion-item> \n\n    \n  \n  </ion-card-content>\n</ion-card>\n<button ion-button clear (tap)="ajouterAnnonce()" > {{button_value}}</button>\n<div *ngIf="actif==true">\n<p>Merci de saisir les donées necessaires pour ajouter une annonce</p>\n\n<ion-item>\n<ion-label fixed>Nom Annonce</ion-label>\n<ion-input type="text" [(ngModel)]="nomAnn"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label fixed>Description</ion-label>\n<ion-input type="text" [(ngModel)]="details"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label fixed>Prix</ion-label>\n  <ion-input type="number" [(ngModel)]="prix"></ion-input>\n  </ion-item>\n<button ion-button clear (tap)="saveAnnonce()">Ajouter!!</button>\n\n\n\n</div>\n</div>\n<div *ngIf="email==null">\n\n  <h2>Veuillez connecter avant pour pouvoir acceder à votre profil ,ajouter des annonces et gerer vous annonces </h2>\n\n</div>\n</ion-content>'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DATABASE_FILE_NAME = 'data.db';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, alertController, loadingController, sqlite, platform) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.sqlite = sqlite;
        this.platform = platform;
        this.isAuthentificated = false;
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthentificated = localStorage.getItem("email") != null;
        this.platform.ready().then(function () {
            _this.createDatabaseFile();
        });
    };
    SettingsPage.prototype.login = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, query;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        query = "SELECT*  FROM `USERS` WHERE email=? and password =?";
                        this.db.executeSql(query, [this.email, this.password]).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var alert;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data != null && data.rows && data.rows.length > 0)) return [3 /*break*/, 1];
                                        localStorage.setItem('email', data.rows.item(0).email);
                                        localStorage.setItem('nom', data.rows.item(0).nom);
                                        localStorage.setItem('prenom', data.rows.item(0).prenom);
                                        localStorage.setItem('poulangue', data.rows.item(0).password);
                                        this.isAuthentificated = true;
                                        this.loading.dismiss();
                                        return [3 /*break*/, 4];
                                    case 1:
                                        this.loading.dismiss();
                                        return [4 /*yield*/, this.alertController.create({
                                                title: 'Impossible de se connecter',
                                                message: "Veuillez verifier vos coordonnées ",
                                                buttons: ['OK'],
                                            })];
                                    case 2:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.logout = function () {
        localStorage.removeItem('email');
        localStorage.removeItem('nom');
        localStorage.removeItem('prenom');
        localStorage.removeItem('poulangue');
        this.isAuthentificated = false;
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    SettingsPage.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('Bdd1 créée !');
            _this.db = db;
            _this.createTables();
        })
            .catch(function (e) { return console.log(e); });
    };
    SettingsPage.prototype.createTables = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `USERS` ( `id` INTEGER NOT NULL,`email` TEXT NOT NULL,  `nom` TEXT NOT NULL, `prenom` TEXT NOT NULL, `password` TEXT,  PRIMARY KEY(`id`))', {})
            .then(function () {
            console.log('Table USERS created !');
            _this.saveUser("Nizar", "Essid", "essid.nizar.123@gmail.com", "123456");
            //  this.initializeItems();
        })
            .catch(function (e) { return console.log(e); });
    };
    SettingsPage.prototype.connection = function (email, password) {
        var query = "SELECT*  FROM `USERS` WHERE email=? and password =?";
        this.db.executeSql(query, [email, password]).then(function (data) {
            if (data != null && data.rows && data.rows.length > 0) {
            }
            else {
            }
        });
    };
    SettingsPage.prototype.saveUser = function (prenom, nom, email, password) {
        // INSERT INTO `CATEGORIES` (name) VALUES('Test');
        // INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
        this.db.executeSql('INSERT INTO `USERS`(nom,prenom,email,password ) VALUES (\'' + nom + '\', \'' + prenom + '\', \'' + email + '\', \'' + password + '\')', {})
            .then(function () { return console.log('User inserted !'); })
            .catch(function (e) { return console.log(e); });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="contentSet " padding>\n  <div id="login-content">\n    <ion-card *ngIf="isAuthentificated==false"><ion-card-content>\n    <form #form="ngForm" (ngSubmit)="login(form)">\n      <ion-grid>\n        <ion-row justify-content-center>\n          <ion-col size-md="12" size-lg="12" size-xs="12">\n            <div text-center>\n              <h3>Login</h3>\n              <br>\n            </div>\n            <div padding>\n              <ion-item>\n                <ion-label>email</ion-label>\n                <ion-input placeholder="saisissez votre email" name="email" value="essid.nizar.123@gmail.com" type="email" [(ngModel)]="email" required>essid.nizar.123@gmail.com</ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>password</ion-label>\n\n                <ion-input placeholder="Saisissez votre password"name="password" type="password" [(ngModel)]="password" required>123456"</ion-input>\n              </ion-item>\n            </div><br>\n            <div padding>\n              <button ion-button size="large" type="submit" [disabled]="form.invalid" expand="block">Connecter</button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n \n</ion-card-content></ion-card> \n<ion-card *ngIf="isAuthentificated==true">\n  <ion-card-content><button ion-button size="large" expand="block"(click)="logout()">Deconnecter</button></ion-card-content>\n</ion-card>\n\n\n</div>\n</ion-content>'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var DATABASE_FILE_NAME = 'data.db';
var HomePage = (function () {
    function HomePage(navCtrl, sqlite, actionSheetController, platform, alertController, modalController) {
        // this.initializeItems();
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.alertController = alertController;
        this.modalController = modalController;
        this.user = localStorage.getItem("email") ? localStorage.getItem("email") : "anonyme";
        this.button_value = "Ajouter une annonce";
        this.actif = false;
        this.annonces = [];
        this.items = [];
        this.dbCreated = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dbCreated) {
            this.platform.ready().then(function () {
                _this.createDatabaseFile();
            });
        }
    };
    HomePage.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('Bdd créée !');
            _this.db = db;
            _this.createTables();
            _this.dbCreated = true;
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.createTables = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `ANNONCES` ( `idAnnonce` INTEGER NOT NULL, `name` TEXT NOT NULL,  `desc` TEXT, `prix` INTEGER ,`proprietaire` TEXT, PRIMARY KEY(`idAnnonce`))', {})
            .then(function () {
            console.log('Table Annonces created !');
            _this.saveAnnonce1("Maison", "une maison à Tunis de 500m de surface est à vendre", 555, "essid.nizar.123@gmail.com");
            _this.saveAnnonce1("Pc Gamer", "un ordinateur gamer utilisé  2 ans ", 920, "nizar@gmail.com");
            _this.saveAnnonce1("Machine à laver", "Bien fonctionnelle", 150, "Systeme.hotmail.fr");
            _this.initializeItems();
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.initializeItems = function () {
        var _this = this;
        this.annonces = [];
        this.db.executeSql('SELECT*  FROM `ANNONCES`', {})
            .then(function (data) {
            if (data == null) {
                return;
            }
            if (data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.annonces.push({ "id": data.rows.item(i).idAnnonce, "name": data.rows.item(i).name, "details": data.rows.item(i).desc, "prix": data.rows.item(i).prix, "proprietaire": data.rows.item(i).proprietaire });
                    }
                    _this.items = _this.annonces;
                }
            }
            ;
        });
    };
    HomePage.prototype.ajouterAnnonce = function () {
        this.button_value = "Desactiver l'ajout";
        this.actif = !this.actif;
    };
    HomePage.prototype.saveAnnonce = function () {
        var _this = this;
        console.log('Annonce name -> ' + this.nom);
        console.log('Description -> ' + this.details);
        // INSERT INTO `CATEGORIES` (name) VALUES('Test');
        // INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
        this.db.executeSql('INSERT INTO `Annonces`(name, desc,prix,proprietaire) VALUES (\'' + this.nom + '\', \'' + this.details + '\', \'' + this.prix + '\', \'' + this.user + '\')', {})
            .then(function () {
            console.log('Annonce inserted !');
            _this.initializeItems();
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.saveAnnonce1 = function (nom, details, prix, proprietaire) {
        this.db.executeSql('INSERT INTO `Annonces`(name, desc,prix,proprietaire) VALUES (\'' + nom + '\', \'' + details + '\', \'' + prix + '\', \'' + proprietaire + '\')', {})
            .then(function () { return console.log('Annonce inserted !'); })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        this.items = this.annonces;
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        console.log(this.items);
    };
    HomePage.prototype.presentActionSheet = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            title: 'Options',
                            buttons: [{
                                    text: 'Supprimer',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.supprimer(item.id);
                                    }
                                }, {
                                    text: 'Modifier',
                                    icon: 'edit',
                                    handler: function () {
                                        _this.modifAnnonce({ "id": item.id, "name": item.name, "details": item.details, "prix": item.prix });
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.supprimer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                alert = this.alertController.create({
                    title: "Suppression de l'annonce",
                    message: "Vous allez supprimer cette annonce ?<br/>Cette op\u00E9ration est irrevrsible",
                    buttons: [
                        {
                            text: 'Annuler',
                            role: 'annuler',
                        },
                        {
                            text: 'Confirmer',
                            role: 'confirmer',
                            handler: function () {
                                _this.deleteAnnoce(id);
                            }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.deleteAnnoce = function (id) {
        var _this = this;
        console.log(id);
        var sql = "DELETE FROM ANNONCES WHERE idAnnonce = " + id;
        console.log(sql);
        this.db.executeSql(sql, [])
            .then(function (res) {
            alert("Annonce supprimé avec succès!");
            _this.initializeItems();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    HomePage.prototype.modifAnnonce = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: 'Modifier une annonce',
                            message: "Enter le nouveau nom de l'annonce",
                            inputs: [
                                {
                                    name: 'nom',
                                    placeholder: item.name,
                                    value: item.name
                                },
                                {
                                    name: 'details',
                                    placeholder: item.details,
                                    value: item.details
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Anneuler',
                                    handler: function (data) {
                                    }
                                },
                                {
                                    text: 'Confirmer',
                                    handler: function (data) {
                                        _this.edit({ "id": item.id, "nom": data.nom, "details": data.details, "prix": data.prix });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.edit = function (item) {
        var _this = this;
        var sqlText = "UPDATE Annonces SET (name , desc,prix ) = ( ? , ? ,?  ) where idAnnonce = ? ;";
        var values = [item.nom, item.details || null, item.prix || null, item.id];
        this.db.executeSql(sqlText, values).then(function (res) {
            alert("Annonce modifié avec succès!");
            _this.initializeItems();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
        ;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>Acceuil  </ion-title>\n    <ion-searchbar (ionInput)="getItems($event)" [debounce]="500" placeholder="search..."></ion-searchbar>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content padding>\n\n\n<!-------------------------------------------------------->\n<ion-card *ngFor="let item of items">\n \n  \n    <ion-card-content>\n      <ion-item>   \n        <ion-label>Titre</ion-label>\n        <ion-label>\n        {{item.name}}\n        </ion-label></ion-item> <ion-item>  \n      <ion-label>Details</ion-label><br>\n        <ion-label> {{item.details}}</ion-label><br>\n      </ion-item> \n      <ion-item>  \n        <ion-label>Prix</ion-label><br>\n          <ion-label> {{item.prix}}</ion-label><br>\n        </ion-item> \n      <ion-item>  \n        <ion-label>Contact</ion-label><br>\n          <ion-label> {{item.proprietaire}}</ion-label><br>\n        </ion-item> \n      \n    \n    </ion-card-content>\n  </ion-card>\n\n   \n</ion-content>\n'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/pages/home/home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            declarations: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_single_annonce_single_annonce__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ajout_ajout__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_authentification_authentification__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_13__pages_ajout_ajout__["a" /* AjoutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_10__pages_single_annonce_single_annonce__["a" /* SingleAnnoncePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_13__pages_ajout_ajout__["a" /* AjoutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_10__pages_single_annonce_single_annonce__["a" /* SingleAnnoncePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_authentification_authentification__["a" /* AuthentificationProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_authentification_authentification__["a" /* AuthentificationProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_authentification_authentification__["a" /* AuthentificationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleAnnoncePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AlertController, NavController} from 'ionic-angular';




/**
 * Generated class for the SingleAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SingleAnnoncePage = (function () {
    function SingleAnnoncePage() {
        //@Input() element:Compte;
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SingleAnnoncePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingleAnnoncePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], SingleAnnoncePage.prototype, "options", void 0);
    SingleAnnoncePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-annonce',template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/pages/single-annonce/single-annonce.html"*/'<ion-card>\n  <ion-item>\n  \n    <button fill="outline" slot="end" color="danger" (click)="this.options.emit(\'1222222\')">\n      <ion-icon name="trash-outline" style="padding: 5px;"></ion-icon>\n     Option\n    </button>\n  </ion-item>\n\n  <ion-card-content>\n    <ion-item>  \n      <ion-label>Titre</ion-label>\n      <ion-label>\n      Maison\n      </ion-label></ion-item> <ion-item>  \n    <ion-label>Details</ion-label><br>\n      <ion-label>kjnnjnpppppp</ion-label><br>\n    </ion-item> \n  \n  \n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/pages/single-annonce/single-annonce.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */]],
            declarations: [],
        }),
        __metadata("design:paramtypes", [])
    ], SingleAnnoncePage);
    return SingleAnnoncePage;
}());

//# sourceMappingURL=single-annonce.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DATABASE_FILE_NAME = 'data.db';
/**
 * Generated class for the AjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjoutPage = (function () {
    function AjoutPage(navCtrl, sqlite, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.platform = platform;
        this.movies = [];
        this.platform.ready().then(function () {
            _this.createDatabaseFile();
        });
    }
    AjoutPage.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('Bdd créée !');
            _this.db = db;
            _this.createTables();
        })
            .catch(function (e) { return console.log(e); });
    };
    AjoutPage.prototype.createTables = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `MOVIES` ( `idMovies` INTEGER NOT NULL, `name` TEXT NOT NULL, `eval` INTEGER NOT NULL DEFAULT 3, `desc` TEXT, `categoryId` INTEGER, PRIMARY KEY(`idMovies`), FOREIGN KEY(`categoryId`) REFERENCES idCategories )', {})
            .then(function () {
            console.log('Table Movies created !');
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS `CATEGORIES` ( `idCategories` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`name` TEXT NOT NULL )', {})
                .then(function () { return console.log('Table Categories created !'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    AjoutPage.prototype.saveMyFilm = function () {
        var _this = this;
        console.log('Movie name -> ' + this.titleMovie);
        console.log('Rating -> ' + this.ratingMovie + '/5');
        console.log('Description -> ' + this.descriptionMovie);
        console.log('Categorie -> ' + this.categorieMovie);
        // INSERT INTO `CATEGORIES` (name) VALUES('Test');
        // INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
        this.db.executeSql('INSERT INTO `CATEGORIES` (name) VALUES(\'' + this.categorieMovie + '\')', {})
            .then(function () {
            console.log('Categorie inserted !');
            _this.db.executeSql('INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES (\'' + _this.titleMovie + '\', \'' +
                _this.ratingMovie + '\', \'' + _this.descriptionMovie + '\', last_insert_rowid())', {})
                .then(function () { return console.log('Movie inserted !'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    AjoutPage.prototype.retrieveFilms = function () {
        var _this = this;
        this.movies = [];
        this.db.executeSql('SELECT name FROM `MOVIES`', {})
            .then(function (data) {
            if (data == null) {
                return;
            }
            if (data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.movies.push(data.rows.item(i).name);
                    }
                }
            }
        });
    };
    AjoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajout',template:/*ion-inline-start:"/home/nizar/Documents/ionicMiniProject/src/pages/ajout/ajout.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  SQLite\n  </ion-title>\n  </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n  <p>Permet de stocker des données de façon structurées</p>\n  <ion-list>\n  <ion-item>\n  <ion-label fixed>Title</ion-label>\n  <ion-input type="text" [(ngModel)]="titleMovie"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label fixed>Rating</ion-label>\n  <ion-input type="text" [(ngModel)]="ratingMovie"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label fixed>Description</ion-label>\n  <ion-input type="text" [(ngModel)]="descriptionMovie"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label fixed>Categorie</ion-label>\n  <ion-input type="text" [(ngModel)]="categorieMovie"></ion-input>\n  </ion-item>\n  </ion-list>\n  <button ion-button clear (tap)="saveMyFilm()">Save my film !!</button>\n  <ion-list *ngIf="movies">\n  <ion-item *ngFor="let movie of movies">\n  <ion-label fixed>{{ movie }}</ion-label>\n  </ion-item>\n  </ion-list>\n  <button ion-button clear (tap)="retrieveFilms()">Get films saved !!</button>\n  </ion-content>'/*ion-inline-end:"/home/nizar/Documents/ionicMiniProject/src/pages/ajout/ajout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], AjoutPage);
    return AjoutPage;
}());

//# sourceMappingURL=ajout.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATABASE_FILE_NAME = 'data.db';
/*
  Generated class for the AuthentificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthentificationProvider = (function () {
    function AuthentificationProvider(sqlite, platform) {
        var _this = this;
        this.sqlite = sqlite;
        this.platform = platform;
        console.log('Hello AuthentificationProvider Provider');
        this.platform.ready().then(function () {
            _this.createDatabaseFile();
        });
    }
    AuthentificationProvider.prototype.ngOnInit = function () {
    };
    AuthentificationProvider.prototype.logout = function () {
        localStorage.removeItem('email');
        localStorage.removeItem('nom');
        localStorage.removeItem('prenom');
        localStorage.removeItem('poulangue');
    };
    AuthentificationProvider.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('Bdd1 créée !');
            _this.db = db;
            _this.createTables();
        })
            .catch(function (e) { return console.log(e); });
    };
    AuthentificationProvider.prototype.createTables = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `USERS` ( `id` INTEGER NOT NULL,`email` TEXT NOT NULL,  `nom` TEXT NOT NULL, `prenom` TEXT NOT NULL, `password` TEXT,  PRIMARY KEY(`id`))', {})
            .then(function () {
            console.log('Table USERS created !');
            _this.saveUser("Nizar", "Essid", "essid.nizar.123@gmail.com", "123456");
            //  this.initializeItems();
        })
            .catch(function (e) { return console.log(e); });
    };
    AuthentificationProvider.prototype.connection = function (email, password) {
        var query = "SELECT*  FROM `USERS` WHERE email=? and password =?";
        console.log("email=" + email);
        console.log("password=" + password);
        this.db.executeSql(query, [email, password]).then(function (data) {
            if (data == null) {
                console.log("null");
                return { "id": "", "nom": "", "prenom": "", "email": "", "password": "" };
            }
            else if (data.rows) {
                console.log("not null");
                if (data.rows.length > 0) {
                    console.log("pas vide");
                    return { "id": data.rows.item(0).id, "nom": data.rows.item(0).nom, "prenom": data.rows.item(0).prenom, "email": data.rows.item(0).email, "password": data.rows.item(0).password };
                }
                else
                    console.log("vide");
            }
            else
                return { "id": "", "nom": "", "prenom": "", "email": "", "password": "" };
        });
    };
    AuthentificationProvider.prototype.saveUser = function (prenom, nom, email, password) {
        // INSERT INTO `CATEGORIES` (name) VALUES('Test');
        // INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
        this.db.executeSql('INSERT INTO `USERS`(nom,prenom,email,password ) VALUES (\'' + nom + '\', \'' + prenom + '\', \'' + email + '\', \'' + password + '\')', {})
            .then(function () { return console.log('User inserted !'); })
            .catch(function (e) { return console.log(e); });
    };
    AuthentificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], AuthentificationProvider);
    return AuthentificationProvider;
}());

//# sourceMappingURL=authentification.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map