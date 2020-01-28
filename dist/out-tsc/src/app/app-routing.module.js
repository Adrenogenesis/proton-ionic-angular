import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        //imports: [
        //  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        // ],
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map