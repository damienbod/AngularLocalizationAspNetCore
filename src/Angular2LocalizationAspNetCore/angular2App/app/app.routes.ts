import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopAdminComponent } from './shop-admin/shop-admin.component'; 

import { ProductService } from './services/ProductService';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'shopAdmin', component: ShopAdminComponent }
];

export const routing = RouterModule.forRoot(appRoutes);