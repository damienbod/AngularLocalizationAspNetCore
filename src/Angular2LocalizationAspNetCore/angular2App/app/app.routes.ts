import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopAdminComponent } from './shop-admin/shop-admin.component'; 

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'shopAdmin', component: ShopAdminComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
