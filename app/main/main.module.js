"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var main_component_1 = require('./main.component');
var home_component_1 = require('../home/home.component');
var about_component_1 = require('../about/about.component');
var user_list_component_1 = require('../users/user-list.component');
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, router_1.RouterModule.forRoot([
                    {
                        path: 'about',
                        component: about_component_1.AboutComponent
                    },
                    {
                        path: 'home',
                        component: home_component_1.HomeComponent
                    },
                    {
                        path: 'users',
                        component: user_list_component_1.UserListComponent
                    }
                ])],
            declarations: [home_component_1.HomeComponent, about_component_1.AboutComponent, main_component_1.MainComponent, user_list_component_1.UserListComponent],
            bootstrap: [main_component_1.MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map