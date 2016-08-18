/**
 * Created by syed-muhammad-taha on 8/7/16.
 */
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
var app_sidebar_component_1 = require('./app.sidebar.component');
var app_file_upload_component_1 = require('./app.file-upload.component');
var StpTeacherDashboard = (function () {
    function StpTeacherDashboard() {
    }
    StpTeacherDashboard = __decorate([
        core_1.Component({
            selector: 'stp-dashboard',
            templateUrl: 'js/app/templates/app.teacher-dashboard.template.html',
            directives: [app_sidebar_component_1.StpSideBar, app_file_upload_component_1.StpFileUpload]
        }), 
        __metadata('design:paramtypes', [])
    ], StpTeacherDashboard);
    return StpTeacherDashboard;
}());
exports.StpTeacherDashboard = StpTeacherDashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLnRlYWNoZXItZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFHSCxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsc0NBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsMENBQThCLDZCQUE2QixDQUFDLENBQUE7QUFTNUQ7SUFFSTtJQUVBLENBQUM7SUFWTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsc0RBQXNEO1lBQ25FLFVBQVUsRUFBRSxDQUFDLGtDQUFVLEVBQUUseUNBQWEsQ0FBQztTQUMxQyxDQUFDOzsyQkFBQTtJQVFGLDBCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSwyQkFBbUIsc0JBTS9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAudGVhY2hlci1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgc3llZC1tdWhhbW1hZC10YWhhIG9uIDgvNy8xNi5cclxuICovXHJcblxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdHBTaWRlQmFyIH0gZnJvbSAnLi9hcHAuc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHBGaWxlVXBsb2FkIH0gZnJvbSAnLi9hcHAuZmlsZS11cGxvYWQuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RwLWRhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2pzL2FwcC90ZW1wbGF0ZXMvYXBwLnRlYWNoZXItZGFzaGJvYXJkLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1N0cFNpZGVCYXIsIFN0cEZpbGVVcGxvYWRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RwVGVhY2hlckRhc2hib2FyZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
