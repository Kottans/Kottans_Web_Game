import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainhallComponent } from './components/mainhall/mainhall.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainhallComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

