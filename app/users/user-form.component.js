System.register(['@angular/core', '@angular/router-deprecated', '@angular/common', '../shared/baseValidators', './users.service', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, common_1, baseValidators_1, users_service_1, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (baseValidators_1_1) {
                baseValidators_1 = baseValidators_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb, _router, _routeParams, _userService) {
                    this.fb = fb;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    this.user = new user_1.User();
                    this.title = {};
                    this.form = this.fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', baseValidators_1.BaseValidators.email],
                        phone: [],
                        address: this.fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id == null ? "Add User" : "Edit User";
                    if (!id)
                        return;
                    this._userService.getUserById(id).subscribe(function (response) {
                        _this.user = response;
                        // console.log(response);
                    }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UserFormComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty) {
                        return confirm("You have unsaved changes. Are you sure you want to navigate away?");
                    }
                    return true;
                };
                UserFormComponent.prototype.addUser = function (user) {
                    this._userService.addUser(user)
                        .subscribe(function (x) { return console.log(x); });
                };
                UserFormComponent.prototype.updateUser = function (user) {
                    this._userService.updateUser(this._routeParams.get("id"), user)
                        .subscribe(function (x) { return console.log(x); });
                };
                UserFormComponent.prototype.save = function () {
                    if (this.user.id)
                        this.updateUser(this.user);
                    else
                        this.addUser(this.user);
                    // Ideally, here we'd want:
                    // this.form.markAsPristine();
                    this._router.navigate(['Users']);
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/user-form.component.html',
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_deprecated_1.Router, router_deprecated_1.RouteParams, users_service_1.UsersService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map