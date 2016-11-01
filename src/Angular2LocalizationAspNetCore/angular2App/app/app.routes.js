import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopAdminComponent } from './shop-admin/shop-admin.component';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'shopAdmin', component: ShopAdminComponent }
];
export var routing = RouterModule.forRoot(appRoutes);
