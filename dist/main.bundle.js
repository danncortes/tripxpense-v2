webpackJsonp([1,4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.authenticated()) {
            /* if(this.auth.isAdmin()){*/
            return true;
            /* } else {
               this.router.navigate(['unauthorized']);
               return false;
             }*/
        }
        else {
            this.router.navigate(['welcome']);
            // Save URL to redirect to after login and fetching profile to get roles
            //localStorage.setItem('redirect_url', state.url);
            //this.authService.login();
            //this.router.navigate(['']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryListComponent = (function () {
    function CategoryListComponent(categoryService) {
        var _this = this;
        this.categoryService = categoryService;
        this.getCategories = function () {
            _this.processing = true;
            _this.categoryService.get().subscribe(function (data) {
                _this.categories = data;
                _this.processing = false;
            });
        };
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-category-list',
        template: __webpack_require__(293),
        styles: [__webpack_require__(278)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], CategoryListComponent);

var _a;
//# sourceMappingURL=category-list.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(295),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(297),
        styles: [__webpack_require__(282)]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_paymethod_paymethod_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymethodCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymethodCreateComponent = (function () {
    /*formData: object = {
      name:''
    };*/
    function PaymethodCreateComponent(dialogRef, formBuilder, payMethodService, router, toastService) {
        this.dialogRef = dialogRef;
        this.payMethodService = payMethodService;
        this.router = router;
        this.toastService = toastService;
        this.createPayMethodForm = formBuilder.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
    }
    PaymethodCreateComponent.prototype.ngOnInit = function () {
    };
    PaymethodCreateComponent.prototype.createPaymethod = function (formData) {
        var _this = this;
        console.log(formData);
        this.processing = true;
        this.payMethodService.create(formData)
            .subscribe(function (data) {
            _this.processing = false;
            _this.dialogRef.close(true);
            _this.toastService.success({ message: 'Pay Method Created!' });
        }, function (err) {
            _this.processing = false;
            _this.dialogRef.close(false);
            if (err.status === 422) {
                _this.toastService.error({ message: 'The name has been already taken!' });
                return;
            }
            _this.toastService.error({ message: 'An error has occur!' });
        });
    };
    return PaymethodCreateComponent;
}());
PaymethodCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paymethod-create',
        template: __webpack_require__(298),
        styles: [__webpack_require__(283)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_paymethod_paymethod_service__["a" /* PaymethodService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__["a" /* ToastService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_paymethod_paymethod_service__["a" /* PaymethodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_paymethod_paymethod_service__["a" /* PaymethodService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__["a" /* ToastService */]) === "function" && _e || Object])
], PaymethodCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=paymethod-create.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_paymethod_paymethod_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymethodEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymethodEditComponent = (function () {
    function PaymethodEditComponent(dialogRef, formBuilder, payMethodService, router, toastService) {
        this.dialogRef = dialogRef;
        this.payMethodService = payMethodService;
        this.router = router;
        this.toastService = toastService;
        this.editPayMethodForm = formBuilder.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
    }
    PaymethodEditComponent.prototype.ngOnInit = function () {
        console.log(this.payMethod);
    };
    PaymethodEditComponent.prototype.editPaymethod = function (formData) {
        var _this = this;
        var id = this.payMethod.id;
        this.processing = true;
        this.payMethodService.update(formData, id)
            .subscribe(function (data) {
            _this.processing = false;
            _this.dialogRef.close(true);
            _this.toastService.success({ message: 'Pay Method Saved!' });
        }, function (err) {
            _this.processing = false;
            _this.dialogRef.close(false);
            if (err.status === 422) {
                _this.toastService.error({ message: 'The name has been already taken!' });
                return;
            }
            _this.toastService.error({ message: 'An error has occur!' });
        });
    };
    return PaymethodEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PaymethodEditComponent.prototype, "payMethod", void 0);
PaymethodEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paymethod-edit',
        template: __webpack_require__(299),
        styles: [__webpack_require__(284)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_paymethod_paymethod_service__["a" /* PaymethodService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__["a" /* ToastService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_paymethod_paymethod_service__["a" /* PaymethodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_paymethod_paymethod_service__["a" /* PaymethodService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__["a" /* ToastService */]) === "function" && _e || Object])
], PaymethodEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=paymethod-edit.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_paymethod_paymethod_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paymethod_create_paymethod_create_component__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymethodListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymethodListComponent = (function () {
    function PaymethodListComponent(paymethodService, dialog, snackBar) {
        var _this = this;
        this.paymethodService = paymethodService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.getPayMethods = function () {
            _this.processing = true;
            _this.paymethodService.get().subscribe(function (data) {
                _this.payMethods = data;
                _this.processing = false;
            });
        };
        this.createPayMethodDialog = function () {
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__paymethod_create_paymethod_create_component__["a" /* PaymethodCreateComponent */], {
                width: '300px'
            });
            dialogRef.afterClosed().subscribe(function (data) {
                if (data) {
                    _this.ngOnInit();
                }
            });
        };
    }
    PaymethodListComponent.prototype.ngOnInit = function () {
        this.getPayMethods();
    };
    return PaymethodListComponent;
}());
PaymethodListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paymethod-list',
        template: __webpack_require__(301),
        styles: [__webpack_require__(286)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_paymethod_paymethod_service__["a" /* PaymethodService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_paymethod_paymethod_service__["a" /* PaymethodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_paymethod_paymethod_service__["a" /* PaymethodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSnackBar */]) === "function" && _c || Object])
], PaymethodListComponent);

var _a, _b, _c;
//# sourceMappingURL=paymethod-list.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.get = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/category')
            .map(function (data) { return data.json(); });
    };
    CategoryService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/category/' + id)
            .map(function (data) { return data.json(); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
    }
    ToastComponent.prototype.ngOnInit = function () {
    };
    return ToastComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "data", void 0);
ToastComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toast',
        template: __webpack_require__(302),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [])
], ToastComponent);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelListComponent = (function () {
    function TravelListComponent() {
    }
    TravelListComponent.prototype.ngOnInit = function () {
        this.getTravels();
    };
    TravelListComponent.prototype.getTravels = function () {
    };
    return TravelListComponent;
}());
TravelListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-travel-list',
        template: __webpack_require__(303),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [])
], TravelListComponent);

//# sourceMappingURL=travel-list.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = (function () {
    function WelcomeComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.redirect();
    };
    WelcomeComponent.prototype.redirect = function () {
        if (this.auth.authenticated) {
            this.router.navigate(['auth']);
        }
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(304),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], WelcomeComponent);

var _a, _b;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 187;


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(77);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(291),
        styles: [__webpack_require__(276)],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_design_material_design_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_routes_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_main_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pay_method_paymethod_list_paymethod_list_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pay_method_paymethod_item_paymethod_item_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pay_method_paymethod_create_paymethod_create_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pay_method_paymethod_edit_paymethod_edit_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toast_toast_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__confirm_dialog_confirm_dialog_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__travel_travel_list_travel_list_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__category_category_list_category_list_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__category_category_item_category_item_component__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Components














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            //Components
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pay_method_paymethod_list_paymethod_list_component__["a" /* PaymethodListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pay_method_paymethod_item_paymethod_item_component__["a" /* PaymethodItemComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pay_method_paymethod_create_paymethod_create_component__["a" /* PaymethodCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pay_method_paymethod_edit_paymethod_edit_component__["a" /* PaymethodEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_18__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_19__travel_travel_list_travel_list_component__["a" /* TravelListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__category_category_list_category_list_component__["a" /* CategoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__category_category_item_category_item_component__["a" /* CategoryItemComponent */]
        ],
        imports: [
            //Modules
            __WEBPACK_IMPORTED_MODULE_6__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__material_design_material_design_module__["a" /* MaterialDesignModule */],
            __WEBPACK_IMPORTED_MODULE_7__routes_routes_module__["a" /* RoutesModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__pay_method_paymethod_create_paymethod_create_component__["a" /* PaymethodCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pay_method_paymethod_edit_paymethod_edit_component__["a" /* PaymethodEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_18__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]
        ],
        declarations: []
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_toast_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_confirm_dialog_component__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryItemComponent = (function () {
    function CategoryItemComponent(categoryService, toastService, dialog) {
        this.categoryService = categoryService;
        this.toastService = toastService;
        this.dialog = dialog;
        this.updateView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CategoryItemComponent.prototype.ngOnInit = function () {
    };
    CategoryItemComponent.prototype.editCategory = function (category) {
    };
    CategoryItemComponent.prototype.removeCategory = function (category) {
        var _this = this;
        var message = 'The category "' + this.category.name + '" will be deleted!';
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
            width: '300px'
        });
        dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
        dialogRef.afterClosed().subscribe(function (response) {
            if (response) {
                _this.categoryService.delete(category.id)
                    .subscribe(function (data) {
                    _this.updateView.emit();
                    _this.toastService.success({ message: 'Category Deleted!' });
                }, function (err) {
                    _this.toastService.error({ message: 'An error has occur!' });
                });
            }
        });
    };
    return CategoryItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CategoryItemComponent.prototype, "category", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CategoryItemComponent.prototype, "updateView", void 0);
CategoryItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-category-item',
        template: __webpack_require__(292),
        styles: [__webpack_require__(277)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_toast_service__["a" /* ToastService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toast_toast_service__["a" /* ToastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialog */]) === "function" && _c || Object])
], CategoryItemComponent);

var _a, _b, _c;
//# sourceMappingURL=category-item.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(296),
        styles: [__webpack_require__(281)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDesignModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["FlexLayoutModule"],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MaterialModule */]
];
var MaterialDesignModule = (function () {
    function MaterialDesignModule() {
    }
    return MaterialDesignModule;
}());
MaterialDesignModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            modules
        ],
        exports: [
            modules
        ],
        declarations: []
    })
], MaterialDesignModule);

//# sourceMappingURL=material-design.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_paymethod_paymethod_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_toast_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paymethod_edit_paymethod_edit_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_dialog_confirm_dialog_component__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymethodItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymethodItemComponent = (function () {
    function PaymethodItemComponent(payMethodService, toastService, dialog) {
        var _this = this;
        this.payMethodService = payMethodService;
        this.toastService = toastService;
        this.dialog = dialog;
        this.updateView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removePaymethod = function (elem) {
            var message = 'The pay method "' + _this.payMethod.name + '" will be deleted!';
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
                width: '300px'
            });
            dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
            dialogRef.afterClosed().subscribe(function (response) {
                if (response) {
                    _this.payMethodService.delete(elem.id)
                        .subscribe(function (data) {
                        _this.updateView.emit();
                        _this.toastService.success({ message: 'Pay Method Deleted!' });
                    }, function (err) {
                        _this.toastService.error({ message: 'An error has occur!' });
                    });
                }
            });
        };
    }
    PaymethodItemComponent.prototype.ngOnInit = function () {
    };
    PaymethodItemComponent.prototype.editPaymethod = function (payMethod) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__paymethod_edit_paymethod_edit_component__["a" /* PaymethodEditComponent */], {
            width: '300px'
        });
        dialogRef.componentInstance.payMethod = payMethod; //Passing data to the Dialog, this is received as 'payMethod'
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.updateView.emit();
            }
        });
    };
    return PaymethodItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PaymethodItemComponent.prototype, "payMethod", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PaymethodItemComponent.prototype, "updateView", void 0);
PaymethodItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paymethod-item',
        template: __webpack_require__(300),
        styles: [__webpack_require__(285)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_paymethod_paymethod_service__["a" /* PaymethodService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_toast_service__["a" /* ToastService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_paymethod_paymethod_service__["a" /* PaymethodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_paymethod_paymethod_service__["a" /* PaymethodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toast_toast_service__["a" /* ToastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialog */]) === "function" && _c || Object])
], PaymethodItemComponent);

var _a, _b, _c;
//# sourceMappingURL=paymethod-item.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__travel_travel_list_travel_list_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pay_method_paymethod_list_paymethod_list_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_category_list_category_list_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Components


//Dashboard

//travel

//Pay Methods

//Categories


var appRoutes = [
    //Dashboard
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */], children: [
            //{ path: 'auth', component:MainComponent, canActivate: [AuthGuard], children:[
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'travels', component: __WEBPACK_IMPORTED_MODULE_6__travel_travel_list_travel_list_component__["a" /* TravelListComponent */] },
            { path: 'paymethods', component: __WEBPACK_IMPORTED_MODULE_7__pay_method_paymethod_list_paymethod_list_component__["a" /* PaymethodListComponent */] },
            { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_8__category_category_list_category_list_component__["a" /* CategoryListComponent */] }
        ] },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];
var RoutesModule = (function () {
    function RoutesModule() {
    }
    return RoutesModule;
}());
RoutesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: []
    })
], RoutesModule);

//# sourceMappingURL=routes.module.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authConfig; });
var authConfig = {
    clientID: 'vr58-dvu3gMKrBJw_nzExEJdv3sirBPi',
    domain: 'tripxpense.auth0.com',
    options: {
        allowedConnections: ['Username-Password-Authentication', 'facebook', 'google-oauth2'],
        auth: {
            redirectUrl: location.origin,
            responseType: 'token'
        }
    }
};
//# sourceMappingURL=auth.config.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".icon-toast {\n  margin-right: 10px;\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main-container\">\n  <router-outlet>\n  </router-outlet>\n</div>\n"

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"trip-md-card\">\n    <p [innerHTML]=\"category.name\"></p>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end start\" class=\"area-controls\">\n        <button md-mini-fab (click)=\"editCategory(category)\"><md-icon>edit</md-icon> </button>\n        <button md-mini-fab (click)=\"removeCategory(category)\"><md-icon>delete</md-icon> </button>\n    </div>\n</md-card>"

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports = "<md-spinner class=\"spinner-loading-secc\" *ngIf=\"this.processing\"></md-spinner>\n\n<section *ngIf=\"!this.processing\">\n\n    <section fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <h3 class=\"title-section\">Categories</h3>\n        <!--<button md-raised-button (click)=\"createPayMethodDialog()\"><md-icon>add_circle</md-icon> Create Pay Method</button>-->\n    </section>\n    <br>\n    <br>\n    <div fxLayout.gt-xs=\"row\" fxLayoutWrap fxLayoutAlign=\"start start\">\n\n        <app-category-item fxFlex=\"100%\" fxFlex.gt-xs=\"33.3%\" (updateView)=\"ngOnInit()\" *ngFor=\" let category of categories\" [category]=\"category\">\n        </app-category-item>\n\n    </div>\n</section>"

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports = "<section class=\"trip-md-dialog-container\">\n  <span class=\"align-center\" [innerHTML]=\"message\"></span>\n  <br>\n  <br>\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <button md-button md-raised-button color=\"primary\" (click)=\"confirm()\">Yes, do it!</button>\n    <button md-button md-raised-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</section>\n"

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "<h4>Dashboard</h4>"

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div>\n            LOGO\n        </div>\n        <div>\n            <nav>\n                <div>\n                    <!--<div *ngIf=\"auth.authenticated()\">-->\n                    <button md-button routerLink=\"/auth/dashboard\">Dashboard</button>\n                    <button md-button routerLink=\"/auth/operations\">Operation</button>\n                    <button md-button routerLink=\"/auth/travels\">Travels</button>\n                    <button md-button routerLink=\"/auth/paymethods\">Payment Methods</button>\n                    <button md-button routerLink=\"/auth/categories\">Categories</button>\n                    <button md-button class=\"btn btn-primary btn-margin\" (click)=\"auth.logout()\">Log Out</button>\n                </div>\n                <!--<button md-raised-button class=\"btn btn-primary btn-margin\" (click)=\"auth.login()\" *ngIf=\"!auth.authenticated()\">Log In</button>-->\n            </nav>\n        </div>\n    </div>\n\n</md-toolbar>"

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"dialog-header\">\n    <span>Create a Pay Method</span>\n</md-toolbar>\n<section class=\"trip-md-dialog-container\">\n\n    <!--<form #form=\"ngForm\" (ngSubmit)=\"createPaymethod(form.value)\" fxLayoutWrap fxLayout=\"row\">\n        <md-input-container fxFlex=\"100\">\n            <input mdInput placeholder=\"Name\" type=\"text\" name=\"name\" #name=\"ngModel\" [ngModel]=\"formData.name\" required>\n            <md-error>\n                <span *ngIf=\"name.errors?.required || form.dirty\">A name is required</span>\n            </md-error>\n        </md-input-container>\n        <section fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"end start\">\n            <button type=\"submit\" md-raised-button [disabled]=\"form.invalid || processing\">\n            <span *ngIf=\"!this.processing\">Create</span>\n            <md-spinner *ngIf=\"this.processing\"></md-spinner>\n          </button>\n        </section>\n    </form>-->\n\n    <form action=\"\" [formGroup]=\"createPayMethodForm\" (ngSubmit)=\"createPaymethod(createPayMethodForm.value)\" fxLayoutWrap fxLayout=\"row\">\n        <md-input-container fxFlex=\"100\">\n            <input #name mdInput type=\"email\" placeholder=\"Name\" [formControl]=\"createPayMethodForm.controls['name']\" required>\n\n            <md-error>\n                <span *ngIf=\"createPayMethodForm.controls.name.invalid\">A name is required</span>\n            </md-error>\n        </md-input-container>\n        <section fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"end start\">\n            <button type=\"submit\" md-raised-button [disabled]=\"createPayMethodForm.invalid || processing\">\n        <span *ngIf=\"!this.processing\">Create</span>\n        <md-spinner *ngIf=\"this.processing\"></md-spinner>\n      </button>\n        </section>\n    </form>\n\n</section>"

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <span>Edit a Pay Method</span>\n</md-toolbar>\n<section class=\"trip-md-dialog-container\">\n  <form action=\"\" [formGroup]=\"editPayMethodForm\" (ngSubmit)=\"editPaymethod(editPayMethodForm.value)\" fxLayoutWrap fxLayout=\"row\">\n    <md-input-container fxFlex=\"100\">\n      <input\n        #name\n        mdInput\n        type=\"email\"\n        placeholder=\"Name\"\n        [formControl]=\"editPayMethodForm.controls['name']\"\n        [value]=\"payMethod.name\"\n        required\n        >\n\n        <md-error>\n          <span *ngIf=\"editPayMethodForm.controls.name.invalid\">A name is required</span>\n        </md-error>\n    </md-input-container>\n\n    <section fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"end start\" >\n      <button type=\"submit\" md-raised-button [disabled]=\"editPayMethodForm.invalid || processing\">\n        <span *ngIf=\"!this.processing\">Save</span>\n        <md-spinner *ngIf=\"this.processing\"></md-spinner>\n      </button>\n    </section>\n  </form>\n</section>"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"trip-md-card\">\n  <p [innerHTML]=\"payMethod.name\"></p>\n  <div fxLayout=\"row\" fxLayoutAlign=\"end start\" class=\"area-controls\">\n    <button md-mini-fab (click)=\"editPaymethod(payMethod)\"><md-icon>edit</md-icon> </button>\n    <button md-mini-fab (click)=\"removePaymethod(payMethod)\"><md-icon>delete</md-icon> </button>\n  </div>\n</md-card>\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<md-spinner class=\"spinner-loading-secc\" *ngIf=\"this.processing\"></md-spinner>\n\n<section *ngIf=\"!this.processing\">\n\n    <section fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <h3 class=\"title-section\">Pay Methods</h3>\n        <button md-raised-button (click)=\"createPayMethodDialog()\"><md-icon>add_circle</md-icon> Create Pay Method</button>\n    </section>\n    <br>\n    <br>\n    <div fxLayout.gt-xs=\"row\" fxLayoutWrap fxLayoutAlign=\"start start\">\n\n        <app-paymethod-item fxFlex=\"100%\" fxFlex.gt-xs=\"33.3%\" (updateView)=\"ngOnInit()\" *ngFor=\" let payMethod of payMethods\" [payMethod]=\"payMethod\"></app-paymethod-item>\n\n    </div>\n</section>"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <md-icon class=\"icon-toast\" *ngIf=\"data.success\">check_circle</md-icon>\n  <md-icon class=\"icon-toast\" *ngIf=\"!data.success\">error</md-icon>\n  <span [innerHTML]=\"data.message\"></span>\n</div>"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<p>\n  travel-list works!\n</p>\n"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<p>\n  welcome works!\n</p>\n"

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_config__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        // Configure Auth0
        this.lock = new Auth0Lock(__WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* authConfig */].clientID, __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* authConfig */].domain, __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* authConfig */].options);
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            console.log('logged');
            // Fetch profile information
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
                _this.router.navigate(['auth']);
            });
        });
    }
    AuthService.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
        this.router.navigateByUrl('/welcome');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(188);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymethodService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymethodService = (function () {
    function PaymethodService(http) {
        this.http = http;
    }
    PaymethodService.prototype.get = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/pay_method')
            .map(function (data) { return data.json(); });
    };
    PaymethodService.prototype.find = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/pay_method/' + data.id)
            .map(function (data) { return data.json(); });
    };
    PaymethodService.prototype.create = function (payMethod) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/pay_method/create', payMethod)
            .map(function (data) { return data.json(); });
    };
    PaymethodService.prototype.update = function (payMethod, id) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/pay_method/update/' + id, payMethod)
            .map(function (data) { return data.json(); });
    };
    PaymethodService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/pay_method/' + id)
            .map(function (data) { return data.json(); });
    };
    return PaymethodService;
}());
PaymethodService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PaymethodService);

var _a;
//# sourceMappingURL=paymethod.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_toast_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = (function () {
    function ToastService(snackBar) {
        this.snackBar = snackBar;
    }
    ToastService.prototype.success = function (data) {
        var time = data.time ? data.time : 4000;
        data.success = true;
        var successSnackBar = this.snackBar.openFromComponent(__WEBPACK_IMPORTED_MODULE_2__toast_toast_component__["a" /* ToastComponent */], {
            duration: time,
            extraClasses: ['success-toast']
        });
        successSnackBar.instance.data = data;
    };
    ToastService.prototype.error = function (data) {
        var time = data.time ? data.time : 4000;
        data.success = false;
        var errorSnackBar = this.snackBar.openFromComponent(__WEBPACK_IMPORTED_MODULE_2__toast_toast_component__["a" /* ToastComponent */], {
            duration: time,
            extraClasses: ['error-toast']
        });
        errorSnackBar.instance.data = data;
    };
    return ToastService;
}());
ToastService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */]) === "function" && _a || Object])
], ToastService);

var _a;
//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.confirm = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    return ConfirmDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ConfirmDialogComponent.prototype, "message", void 0);
ConfirmDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-confirm-dialog',
        template: __webpack_require__(294),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmDialogComponent);

var _a;
//# sourceMappingURL=confirm-dialog.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envName: 'dev',
    apiUrl: 'http://proyectos.local:8888/tripxpense-api/public'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[551]);
//# sourceMappingURL=main.bundle.js.map