import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainhallComponent } from './components/mainhall/mainhall.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const appRoutes: Routes = [
    { path: '', component: MainhallComponent },
    { path: 'profile', component: UserProfileComponent }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
