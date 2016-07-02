"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var shop_component_1 = require('./shop/shop.component');
var shop_admin_component_1 = require('./shop-admin/shop-admin.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'shop', component: shop_component_1.ShopComponent },
    { path: 'shopAdmin', component: shop_admin_component_1.ShopAdminComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map