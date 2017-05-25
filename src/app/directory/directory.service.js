"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DirectoryService = (function () {
    function DirectoryService(http) {
        this.http = http;
        this.base = 'http://agv-sw2017.60.2sic.net';
        this.path = '/DesktopModules/2sxc/API/app/auto/content';
        this.headers = new http_1.Headers();
        this.entrySubject = new BehaviorSubject_1.BehaviorSubject([]);
        this.departmentSubject = new BehaviorSubject_1.BehaviorSubject([]);
        this.departments = this.departmentSubject.asObservable();
        this.entries = this.entrySubject.asObservable();
        this.headers.append('ModuleId', '408');
        this.headers.append('TabId', '73');
        this.getDirectoryItems();
        this.getDeparmentEntries();
    }
    DirectoryService.prototype.getDirectoryItems = function () {
        var _this = this;
        this.http.get((this.base + this.path) + "/DirectoryItem", { headers: this.headers })
            .map(function (res) { return res.json().map(function (entry) {
            entry.Logo = _this.base + entry.Logo;
            return entry;
        }); })
            .subscribe(function (entries) { return _this.entrySubject.next(entries); });
    };
    DirectoryService.prototype.getDeparmentEntries = function () {
        var _this = this;
        this.http.get((this.base + this.path) + "/Department", { headers: this.headers })
            .subscribe(function (res) { return _this.departmentSubject.next(res.json()); });
    };
    DirectoryService = __decorate([
        core_1.Injectable()
    ], DirectoryService);
    return DirectoryService;
}());
exports.DirectoryService = DirectoryService;
//# sourceMappingURL=directory.service.js.map