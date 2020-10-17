import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

const APP_ROUTES: Routes = [
    { path: 'products', component: ProductListComponent},
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
