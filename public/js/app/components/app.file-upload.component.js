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
var StpFileUpload = (function () {
    function StpFileUpload() {
    }
    StpFileUpload.prototype.ngOnInit = function () {
        this.uploadFile = {
            title: '',
            dept: '',
            semester: '',
            subject: '',
            file: '',
            note: ''
        };
    };
    StpFileUpload.prototype.upload = function (form, valid) {
        console.log(form.value, valid);
    };
    StpFileUpload = __decorate([
        core_1.Component({
            selector: 'stp-file-upload',
            templateUrl: 'js/app/templates/app.file-upload.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StpFileUpload);
    return StpFileUpload;
}());
exports.StpFileUpload = StpFileUpload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFRbEQ7SUFJSTtJQUVBLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUE7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLElBQUksRUFBRSxLQUFjO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBekJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdEQUFnRDtTQUNoRSxDQUFDOztxQkFBQTtJQXVCRixvQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlkscUJBQWEsZ0JBc0J6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwLmZpbGUtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzeWVkLW11aGFtbWFkLXRhaGEgb24gOC83LzE2LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVwbG9hZEZpbGUgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMvdXBsb2FkRmlsZS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0cC1maWxlLXVwbG9hZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdqcy9hcHAvdGVtcGxhdGVzL2FwcC5maWxlLXVwbG9hZC50ZW1wbGF0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHBGaWxlVXBsb2FkIGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgcHVibGljIHVwbG9hZEZpbGU6IFVwbG9hZEZpbGU7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy51cGxvYWRGaWxlID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgZGVwdDogJycsXG4gICAgICAgICAgICBzZW1lc3RlcjogJycsXG4gICAgICAgICAgICBzdWJqZWN0OiAnJyxcbiAgICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgICAgbm90ZTogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwbG9hZChmb3JtLCB2YWxpZDogYm9vbGVhbil7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0udmFsdWUsIHZhbGlkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
