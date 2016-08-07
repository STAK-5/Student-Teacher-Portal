/**
 * Created by syed-muhammad-taha on 7/28/16.
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
var router_1 = require('@angular/router');
var app_login_form_component_1 = require('./app.login-form.component');
var app_registration_form_component_1 = require('./app.registration-form.component');
var StpLoginHeader = (function () {
    function StpLoginHeader() {
    }
    StpLoginHeader = __decorate([
        core_1.Component({
            selector: 'stp-login-header',
            template: "\n        <div class=\"row\">\n            <div class=\"col-xs-offset-1 col-xs-10\">\n                    <ul class=\"nav nav-tabs nav-justified\">\n                        <li role=\"presentation\">\n                            <a [routerLink]=\"['/login']\" \n                               routerLinkActive=\"btn btn-info\" \n                               class=\"btn-default btn-raised\">\n                            Login\n                           </a>\n                       </li>\n                        <li role=\"presentation\">\n                            <a [routerLink]=\"['/register']\" \n                               routerLinkActive=\"btn btn-warning\" \n                               class=\"btn-default btn-raised\">\n                            Register\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n        </div>\n    ",
            styles: ["\n        .col-xs-12{\n            width: 100%;\n        }\n    "],
            directives: [router_1.ROUTER_DIRECTIVES, app_login_form_component_1.StpLoginForm, app_registration_form_component_1.StpRegistrationForm]
        }), 
        __metadata('design:paramtypes', [])
    ], StpLoginHeader);
    return StpLoginHeader;
}());
exports.StpLoginHeader = StpLoginHeader;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmxvZ2luLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWxELHlDQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELGdEQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBZ0N6RTtJQUFBO0lBRUEsQ0FBQztJQWpDRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSx5NUJBcUJUO1lBQ0QsTUFBTSxFQUFFLENBQUMsa0VBSVIsQ0FBQztZQUNGLFVBQVUsRUFBRSxDQUFFLDBCQUFpQixFQUFFLHVDQUFZLEVBQUUscURBQW1CLENBQUM7U0FDdEUsQ0FBQzs7c0JBQUE7SUFHRixxQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksc0JBQWMsaUJBRTFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAubG9naW4taGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzeWVkLW11aGFtbWFkLXRhaGEgb24gNy8yOC8xNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdHBMb2dpbkZvcm0gfSBmcm9tICcuL2FwcC5sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHBSZWdpc3RyYXRpb25Gb3JtIH0gZnJvbSAgJy4vYXBwLnJlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0cC1sb2dpbi1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtb2Zmc2V0LTEgY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBuYXYtanVzdGlmaWVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2xvZ2luJ11cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYnRuIGJ0bi1pbmZvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tZGVmYXVsdCBidG4tcmFpc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvcmVnaXN0ZXInXVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJidG4gYnRuLXdhcm5pbmdcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1kZWZhdWx0IGJ0bi1yYWlzZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuY29sLXhzLTEye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbIFJPVVRFUl9ESVJFQ1RJVkVTLCBTdHBMb2dpbkZvcm0sIFN0cFJlZ2lzdHJhdGlvbkZvcm1dXG59KVxuZXhwb3J0IGNsYXNzIFN0cExvZ2luSGVhZGVye1xuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
